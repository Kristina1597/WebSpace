import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={s.user_item}>
            <div className={s.user_blockWithPhoto}>
                <NavLink to={'/profile/' + user.id}>
                    <img className={s.user_avatar}
                         src={user.photos.large !== null ? user.photos.large : userPhoto}/>
                </NavLink>
            </div>
            <div className={s.user_blockWithInfo}>
                <div className={s.user_name}>
                    {user.name}
                </div>
            </div>
            <div className={s.user_blockWithButton}>
                {user.followed
                    ? <button className={s.user_unfollowButton}
                              disabled={followingInProgress
                                  .some(id => id === user.id)}
                              onClick={() => {
                                  unfollow(user.id);
                              }}>
                        Unfollow
                    </button>
                    : <button className={s.user_followButton}
                              disabled={followingInProgress
                                  .some(id => id === user.id)}
                              onClick={() => {
                                  follow(user.id);
                              }}>
                        Follow
                    </button>
                }
            </div>


        </div>
    )
};

export default User;