import React from 'react';
import Blog from "./Blog";

function Blogs({ blogs }) {
    const allBlogs = blogs.map((blog, index) => {
        return (
            <Blog key={blog.id} blog={blog} />
        )
    })

    return (
        <>
            {allBlogs}
        </>
    )
}

export default Blogs
