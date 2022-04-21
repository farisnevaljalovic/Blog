import React from 'react';
import useFetch from '../../useFetch';
import style from "./Home.module.css";
import Blogs from "../../components/Blogs/Blogs.js";

function Home() {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); 
    
    return (
        <div className={style.home}>
            {isPending && <div>Loading...</div>}
            {blogs && <Blogs blogs={blogs} />}
            {error && <div>{error}</div>}
        </div>
    )
}

export default Home
