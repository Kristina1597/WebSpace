import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <div>Web</div>
                <div>Space</div>
            </div>
            <nav className={s.nav}>
                <div className={s.item} id={s.profile}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item} id={s.dialogs}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </div>
                <div className={s.item} id={s.users}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
                </div>
            </nav>
            <div className={`${s.profile} ${s.item} ${s.active}`}>
                    { props.isAuth
                        ? <div>
                            <NavLink className={s.authName} to='/profile'>
                                {props.login}
                            </NavLink>
                            <button className={s.authButton} onClick={props.logout}>
                                Logout</button>
                    </div>
                        : <NavLink to={'/login'} activeClassName={s.active}>
                            Login
                        </NavLink> }

            </div>
        </header>
    )
};

export default Header;