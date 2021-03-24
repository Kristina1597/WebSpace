import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./Profile.module.css"

const Profile = (props) => {
    return (
        <div className={s.profile_wrapper}>
            <div className={s.profile_info}>
                <ProfileInfo profile={props.profile}
                             status={props.status}
                             updateStatus={props.updateStatus}
                             isOwner={props.isOwner}
                             savePhoto={props.savePhoto}
                             saveProfile={props.saveProfile}
                />
            </div>
            <div className={s.profile_posts}>
                <MyPostsContainer profile={props.profile}/>
            </div>

        </div>
    )
};

export default Profile;