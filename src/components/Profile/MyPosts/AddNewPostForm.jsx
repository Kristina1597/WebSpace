import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import s from './MyPosts.module.css'

const maxLength100 = maxLengthCreator(100);

const AddNewPostForm = (props) => {

    return (
        <form className={s.newPostForm} onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   placeholder={"What is new in your life?"}
                   name={"newPostText"}
                   validate={[required, maxLength100]}
            />
            <div className={s.blockWithButtonForNewPostForm}>
                <button className={s.buttonForNewPostForm}>Add post</button>
            </div>

        </form>
    )
};

export const AddPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);