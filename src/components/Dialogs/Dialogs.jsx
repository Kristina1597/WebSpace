import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm"
import dialogsPhoto from "./../../assets/images/dialogsPhoto.png"

const Dialogs = (props) => {
    let state = props.dialogsPage;

    // let dialogsElements = state.dialogs.map(d => <DialogsItem  name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageText;

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    };

    if (props.isAuth === false)
        return <Redirect to={"/login"}/>;


    return (
        <div className={s.dialogs_wrapper}>
                <div className={s.dialogsItems}>
                    <div><img className={s.dialogsPhoto} src={dialogsPhoto}/></div>
                    <div>{state.dialogs[0].name}</div>


                </div>
                <div className={s.messages}>
                    <div className={s.messages_header}>
                        <div className={s.messages_dialogName}>{state.dialogs[0].name}</div>
                        <div className={s.dialogPhoto}><img  src={dialogsPhoto}/></div>
                    </div>
                    <div className={s.message}>
                        {messagesElements}
                    </div>
                    <AddMessageForm onSubmit={addNewMessage}/>
                </div>

            </div>

    )
};



export default Dialogs;