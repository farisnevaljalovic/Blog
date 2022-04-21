import React from 'react';
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import NewBlog from "./Pages/NewBlog/NewBlog.js";
import BlogDetails from "./Pages/BlogDetails/BlogDetails.js";
import NotFound from "./Pages/ErrorPage/NotFound";
import Navbar from './components/Navbar/Navbar';

function App() {
    return (
        <div className='app-component'>
            <BrowserRouter>
                <Navbar />
                <div className='wrapper'>
                    <Routes>
                    
                        <Route path='/' element={<Home />} />
                        <Route path='/newBlog' element={<NewBlog />} />
                        <Route path='/blog/:id' element={<BlogDetails />} />
                        <Route path='*' element={<NotFound />} />
                    
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App
