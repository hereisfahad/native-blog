import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Entypo } from '@expo/vector-icons';

import BlogContext from '../contexts/Blog';

export default function Home({ navigation }) {
  const { blogPosts, deletePost } = useContext(BlogContext)

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Hello Native Blog User!</Text>

      <FlatList
        data={blogPosts}
        keyExtractor={blogPost => String(blogPost.id)}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ShowBlogPost', { blogId: item.id })}>
            <View style={styles.row}>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <TouchableOpacity onPress={() => deletePost(item.id)}>
                <Entypo style={styles.icon} name="trash" size={24} color="red" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
  pageTitle: {
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 24,
    alignSelf: 'center'
  },
  addBlog: {
    backgroundColor: 'skyblue',
    marginVertical: 6,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginHorizontal: 10,
    marginVertical: 5,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  blogTitle: {
    color: 'gray',
    fontWeight: 'bold'
  },
});
