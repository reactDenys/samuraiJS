import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";



const MyPosts = (props) => {
    let postItems = props.posts.map(p => <Post message={p.message} id={p.id} key={p.id} likes={p.likes} ava={p.ava}/>);
    let newPostText = React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostText.current.value;
        props.onPostChange(text);
    }

    return (
        <div className={s.myPosts}>
            <h3>My Posts</h3>
            <div className={s.newPost}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostText} cols="40" rows="3"
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postItems}
        </div>
    )
};

export default MyPosts;
