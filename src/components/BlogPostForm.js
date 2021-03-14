import React from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import { useForm, Controller } from "react-hook-form";

export default function BlogPostForm({ blogPost, onSubmit, title }) {
    const { handleSubmit, errors, control } = useForm();

    return (
        <View style={styles.form}>
            <Text style={styles.label}>Title</Text>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        placeholder="Enter blog title"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="title"
                rules={{ required: 'Title is required' }}
                defaultValue={blogPost?.title ?? ''}
            />
            <Text style={styles.error}>{errors?.title?.message}</Text>

            <Text style={styles.label} or>Content</Text>
            <Controller
                control={control}
                render={({ onChange, onBlur, value }) => (
                    <TextInput
                        placeholder="Enter blog content"
                        style={styles.input}
                        onBlur={onBlur}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />
                )}
                name="content"
                rules={{ required: 'Content is required' }}
                defaultValue={blogPost?.content ?? ''}
            />
            <Text style={styles.error}>{errors?.content?.message}</Text>
            <Button style={styles.submit} onPress={handleSubmit(onSubmit)} title={title} />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        paddingHorizontal: 10,
        marginVertical: 15
    },
    lable: {
        marginTop: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginVertical: 5,
        color: 'black',
        borderRadius: 5,
    },
    error: {
        color: 'red',
        marginTop: 0,
    },
    submit: {
        borderRadius: 5,
        marginTop: 10
    }
})
