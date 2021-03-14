import React, { useContext } from 'react'

import BlogPostForm from '../components/BlogPostForm'
import BlogContext from '../contexts/Blog';

export default function AddBlogPost({ navigation }) {
    const { addBlogPost } = useContext(BlogContext)

    return (
        <BlogPostForm
            onSubmit={(data) => addBlogPost(data, navigation.navigate('Home'))}
            title="Add Blog"
        />
    )
}
