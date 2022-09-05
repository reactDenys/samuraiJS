import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img className={classes.header_logo} src="https://www.designevo.com/res/templates/thumb_small/evil-villain.webp?v=1.0.0.2" alt=""/>
            <div className={classes.login}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;