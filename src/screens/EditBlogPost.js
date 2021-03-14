import React, { useContext } from 'react'

import BlogPostForm from '../components/BlogPostForm'
import BlogContext from '../contexts/Blog';

export default function EditBlogPost({ route, navigation }) {
    const { blogId } = route.params;
    const { editBlogPost, blogPosts } = useContext(BlogContext)

    const blogPost = blogPosts.filter(blogPost => blogPost.id === blogId)[0]

    return (
        <BlogPostForm
            onSubmit={data => editBlogPost({ id: blogId, ...data }, navigation.pop())}
            title="Update Blog"
            blogPost={blogPost}
        />
    )
}
