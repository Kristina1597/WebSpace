import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    return (
            <div className={s.text_container}>
                <div className={s.text}>
                {props.message}
            </div>
        </div>
    )
};

export default Message;