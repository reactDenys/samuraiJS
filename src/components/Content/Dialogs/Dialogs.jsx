import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";

const Dialogs = (props) => {
    let dialogItems = props.data.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} ava={d.avatar}/>);
    let messageItems = props.data.messages.map(m => <MessageItem message={m.message} key={m.id} id={m.id}/>);

    let sendMessage = () => {
        props.sendMessage();
        props.updateNewMessage('');
    };

    const onMessageChange = (e) => {
        let message = e.target.value;
        props.updateNewMessage(message);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogUsrs}>
                <span>Dialogs</span>
                <div className={s.dialog_list}>
                    {dialogItems}
                </div>
            </div>
            <div className={s.messages}>
                <div>
                    {messageItems}
                </div>
                <div>
                    <textarea onChange={onMessageChange} value={props.data.newMessage}></textarea>
                    <button onClick={sendMessage}>Send message</button>
                </div>
            </div>


        </div>
    )
};

export default Dialogs;