import React from "react";
import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={s.dialogItem}>
            <div className={s.img}>
                <img src={props.ava} alt=""/>
            </div>
            <div className={s.userName}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default DialogItem;