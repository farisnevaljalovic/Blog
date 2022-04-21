import React from 'react';
import style from "./NotFound.module.css";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className={style.errorPage}>
            <div className={style.errorMessage}>
                <span>Page</span>
                <span>Not</span>
                <span>Found</span>
                <span className={style.rotate}>dnuoF</span>
            </div>
            <Link className={style.link} to="/">Please go to homepage</Link>  
        </div>
    )
}

export default NotFound
