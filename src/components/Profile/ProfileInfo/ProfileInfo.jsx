import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./profileDataForm";
import {useState} from "react";



const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <div className={s.withPreloader}><Preloader/></div>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    };

    return (
        <div className={s.profileInfo_wrapper}>
            <div className={s.profileInfo_blockWithPhoto}>
                <img className={s.profileInfo_mainPhoto}
                     src={profile.photos.large || userPhoto}/>
                {isOwner && <input className={s.profileInfo_inputForMainPhoto} type={"file"}
                                   onChange={onMainPhotoSelected}/>}
            </div>

            <div className={s.profileInfo_blockWithInfo}>
                <div className={s.profileData_fullName}>
                    {profile.fullName}
                </div>
                <div className={s.profileData_status}>
                     <ProfileStatusWithHooks status={status}
                                                    updateStatus={updateStatus}/>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile}
                                       onSubmit={onSubmit}
                                       profile={profile}/>
                    : <ProfileData profile={profile}
                                   isOwner={isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true);
                                   }}/>}


            </div>
        </div>

    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.profileData_Info}>
            <div className={s.profileData_items}>
                Looking for a job: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div className={s.profileData_items}>
                {profile.lookingForAJob &&
                <div className={s.profileData_items}>
                    <div>My professional skills:</div> {profile.lookingForAJobDescription}
                </div>
                }
            </div>

            <div className={s.profileData_items}>
                <div>About me:</div> {profile.aboutMe}
            </div>
            {/*<div>*/}
            {/*    {profile.fullName}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    About: {profile.aboutMe}*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    {profile.lookingForAJob ?*/}
            {/*        <div>Job search: {profile.lookingForAJobDescription}</div> : null}*/}
            {/*</div>*/}
            <div className={s.profileData_items}>
                <div className={s.profileData_contacts}>
                    Contacts:
                </div>

                {Object.keys(profile.contacts).map(key => {
                    return <Contact contactTitle={key}
                                    contactValue={profile.contacts[key]}
                                    key={key}/>
                })}
                {/*    {Object.entries(profile.contacts).map(e => (*/}
                {/*    e[1] !== null ? <div>{e[0]}: {e[1]}</div> : null*/}
                {/*))}*/}
                {isOwner && <div className={s.profileData_blockWithButton} >
                    <button className={s.profileData_button} onClick={goToEditMode}>Edit</button>
                </div>}
            </div>
        </div>
    )
};


const Contact = ({contactTitle, contactValue}) => {

    return (
        <div className={s.profileData_items}>
            <div>{contactTitle}:</div> {contactValue}
        </div>
    )
};

export default ProfileInfo;