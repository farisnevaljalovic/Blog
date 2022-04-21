import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Blogs.module.css";

function Blog({ blog }) {
    return (
        <Link to={`/blog/${blog.id}`} className={style.blogBox}>
            <h2>{blog.title}</h2>
            <p>Write by: <span>{blog.author}</span></p>
        </Link>
    )
}

export default Blog
