import React from 'react';

import s from './HeaderContainer.module.scss';
import {NavBar} from './NavBar/NavBar';

export const HeaderContainer = () => {
    return (
        <div className={s.block}>
            <NavBar/>
        </div>
    );
};

