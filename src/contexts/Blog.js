import React, { useReducer } from 'react'

const BlogContext = React.createContext()

const initialState = [
    {
        id: 1,
        title: 'Test',
        content: 'This is the testing.'
    }
]

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BLOG_POST':
            return [...state, { id: Math.floor(Math.random() * 99999), ...action.payload }]
        case 'EDIT_BLOG_POST':
            return [...state.map(blog => blog.id === action.payload.id ? { ...action.payload } : blog)]
        case 'DELETE_BLOG_POST':
            return [...state.filter(blog => blog.id !== action.blogId)]
        default:
            return state
    }
}

export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, initialState)

    const addBlogPost = (payload, callback = () => null) => {
        dispatch({ type: 'ADD_BLOG_POST', payload })
        callback()
    }

    const editBlogPost = (payload, callback = () => null) => {
        dispatch({ type: 'EDIT_BLOG_POST', payload })
        callback()
    }

    const deletePost = (blogId) => dispatch({ type: 'DELETE_BLOG_POST', blogId })

    return (
        <BlogContext.Provider value={{ blogPosts, addBlogPost, editBlogPost, deletePost }}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext
