import React from 'react'


import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const {nav, item, active} = classes

export const Navbar = () => {
    return (
        <nav className={nav}>
            <div className={item}>
                <NavLink to='/profile' activeClassName={active}>
                    Profile
                </NavLink>
            </div>
            <div className={item}>
                <NavLink to='/dialogs' activeClassName={active}>
                    Messages
                </NavLink>
            </div>
            <div className={item}>>
                <NavLink to='/news'>
                    News
                </NavLink>
            </div>
            <div className={item}>>
                <NavLink to='/music'>
                    Music
                </NavLink>
            </div>

        </nav>

    )
}