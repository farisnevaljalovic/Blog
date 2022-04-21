import React, { useState } from 'react';
import style from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineSearch } from "react-icons/hi";

function Navbar() {
    const [search, setSearch] = useState('');
    
    const handleClick = (e) => {
        e.preventDefault();
        setSearch('')
    }
    
    return (
        <div className={style.navbar}>
            <Link to="/" className={style.navLogo}>Blog.</Link>
            <div className={style.navSearch}>
                <div className={style.searchBox}>
                    <input className={style.searchInput} value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder="Search blog..." />
                    <button className={style.searchBtn} onClick={handleClick}>
                        <HiOutlineSearch className={style.searchIcon} />
                    </button>
                </div>
            </div>
            <div className={style.navItems}>
                <NavLink to="/" className={({ isActive }) => isActive ? style.active : null}>Home</NavLink>
                <NavLink to="/newBlog" className={({ isActive }) => isActive ? style.active : null}>New Blog</NavLink>
            </div>
        </div>
    )
}

export default Navbar
