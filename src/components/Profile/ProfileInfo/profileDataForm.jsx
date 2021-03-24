import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from './ProfileInfo.module.css';
import React from "react";
import style from "../../common/FormsControls/FormsControls.module.css"
// import style from "../common/FormsControls/FormsControls.module.css"


const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
        <div className={s.profileData_Info}>
            <form onSubmit={handleSubmit}>

                {error && <div className={style.formSummaryError}>
                    {error}</div>}
                <div className={s.profileData_items}>
                    {createField("Full name", "fullName", [], Input)}
                </div>
                <div className={s.profileData_items}>
                    Looking for a job: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
                </div>
                <div className={s.profileData_items}>

                    {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
                </div>
                <div className={s.profileData_items}>

                    {createField("About me", "aboutMe", [], Textarea)}
                </div>
                <div className={s.profileData_items}>
                    <div className={s.profileData_contacts}>
                        Contacts:
                    </div>
                    {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.profileData_items}>
                            {key}: {createField(key, "contacts." + key, [], Input)}
                        </div>
                    })}
                    {/*    {Object.entries(profile.contacts).map(e => (*/}
                    {/*    e[1] !== null ? <div>{e[0]}: {e[1]}</div> : null*/}
                    {/*))}*/}
                </div>
                <div className={s.profileData_blockWithButton}>
                    <button className={s.profileData_button}>
                        Save
                    </button>
                </div>
            </form>
        </div>)
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;
