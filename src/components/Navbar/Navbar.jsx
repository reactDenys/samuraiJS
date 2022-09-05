import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? `${s.active}` : ""}
                         to="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? `${s.active}` : ""}
                         to="/messages">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? `${s.active}` : ""}
                         to="/users">Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? `${s.active}` : ""}
                         to="/news">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? `${s.active}` : ""}
                         to="/stats">Stats</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={(navData) => navData.isActive ? `${s.active}` : ""}
                         to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/messages">Friends</NavLink>

                <div className={s.ava}>
                    <img className={s.avaItem} src={props.ava[0].avatar} alt=""/>
                    <img className={s.avaItem} src={props.ava[1].avatar} alt=""/>
                    <img className={s.avaItem} src={props.ava[2].avatar} alt=""/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;