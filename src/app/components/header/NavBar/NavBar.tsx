import React from 'react';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../Routing/Routing';

export const NavBar = () => {
    // const setActive = ({isActive}:any) => isActive ? s.active : '';
    const setActive = ''

    return (
        <nav>
            <NavLink to={'/'} className={setActive}>Profile</NavLink>
            <NavLink to={PATH.LOGIN} className={setActive}>Login</NavLink>
            <NavLink to={PATH.REGISTRATION} className={setActive}>Registration</NavLink>
            <NavLink to={PATH.PASSWORD} className={setActive}>Password</NavLink>
            <NavLink to={PATH.RECOVERY} className={setActive}>Recovery</NavLink>
            <NavLink to={PATH.TEST_PAGE} className={setActive}>Test Page</NavLink>
            <NavLink to={'/*'} className={setActive}>404</NavLink>
        </nav>
    );
};

