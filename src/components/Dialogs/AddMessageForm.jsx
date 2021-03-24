import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name="newMessageBody"
                   placeholder="Enter your message"
                   validate={[required, maxLength50]}/>

            <button>Send</button>
        </form>
    )
};

export default reduxForm({form: "dialog-add-message-form"})(AddMessageForm);