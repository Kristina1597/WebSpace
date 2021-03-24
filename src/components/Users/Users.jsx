import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import s from "./Users.module.css";

let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div className={s.users_page}>
        <div className={s.users_wrapper}>
            <div className={s.users_counter}>
                Registered on the site {totalUsersCount} users
            </div>
            <div className={s.users_blockWithUsers}>

                {
                    users.map(u => <User key={u.id}
                                         user={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}/>
                    )
                }
            </div>
            <div className={s.users_paginator}>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalItemsCount={totalUsersCount}
                           pageSize={pageSize}
                />
            </div>
        </div>
    </div>
};

export default Users;