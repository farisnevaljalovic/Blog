import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./NewBlog.module.css";

function NewBlog() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Amer');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
        navigate('/');
    })
  }
    return (
        <div className={style.newBlog}>
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" placeholder="Enter blog title..." value={title} onChange={(e)=> setTitle(e.target.value)} required />
                
                <label>Blog body:</label>
                <textarea placeholder='Enter blog...' value={body} onChange={(e)=> setBody(e.target.value)} required></textarea>

                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Amer">Amer</option>
                    <option value="Faris">Faris</option>
                    <option value="Malik">Malik</option>
                    <option value="Sanita">Sanita</option>
                </select>

                <button>Add Blog</button>
            </form>
        </div>
    )
}

export default NewBlog
