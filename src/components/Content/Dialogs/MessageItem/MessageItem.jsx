import React from "react";
//import s from "./MessageItem.module.css";

const MessageItem = (props) => {
    return (
        <div className="message_item">
            {props.message}
        </div>
    )
}

export default MessageItem;