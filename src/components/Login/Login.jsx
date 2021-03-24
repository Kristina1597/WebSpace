import React from 'react';
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"
import style from "./Login.module.css"


const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (

            <form className={style.login_form} onSubmit={handleSubmit}>
                <div className={style.blockWithForms}>
                    {createField("Email", "email", [required], Input)}
                    {createField("Password", "password", [required], Input, {type: "password"})}
                    {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "Remember me")}

                    {captchaUrl && <img src={captchaUrl}/>}
                    {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})
                    }

                    {error && <div className={s.formSummaryError}>
                        {error}
                    </div>}
                </div>
                <div className={style.login_blockWithButtons}>
                    <button className={style.login_loginButton}>Log In</button>
                    <button className={style.login_signUpButton} onClick={event =>  window.location.href='https://social-network.samuraijs.com/signUp'}>Sign Up</button>
                </div>
            </form>

    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={style.login_wrapper}>
        <div className={style.login_headerText}>Log in WebSpace</div>
        <div className={style.loginForm_wrapper}>
            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={props.captchaUrl}/>
        </div>

    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);