import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import BlogContext from '../contexts/Blog';

export default function ShowBlogPost({ route }) {
    const { blogId } = route.params;
    const { blogPosts } = useContext(BlogContext)

    const blogPost = blogPosts.filter(blogPost => blogPost.id === blogId)[0]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        marginVertical: 15
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 15
    },
    content: {
        fontSize: 16,
    }
})
