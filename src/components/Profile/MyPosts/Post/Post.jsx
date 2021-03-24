import React from 'react';
import s from './Post.module.css';
import likeImage from "../../../../assets/images/like.png";
import userPhoto from "../../../../assets/images/user.png";

const Post = (props) => {
    return (
        <div className={s.post_wrapper}>
            <div className={s.post_content}>
                <div className={s.post_info}>
                    <img className={s.post_photo} src={props.photo.small || userPhoto}/>
                    <div>{props.name}</div>
                </div>
                <div className={s.post_message}>
                    {props.message}
                </div>
                <div className={s.post_likes}>
                    <img  className={s.post_iconLike} src={likeImage}/>
                    {props.likesCount}
                </div>
            </div>
        </div>
    )
};

export default Post;