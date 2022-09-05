import React from "react";
import classes from "./Post.module.css";


const Post = (props) => {
    return (
        <div className={classes.item}>
            <img className={classes.logo} src={props.ava} alt=""/>
            <div className={classes.text}>{props.message}</div>
            <div>
                likes <span>{props.likes}</span>
            </div>
        </div>
    )
};

export default Post;