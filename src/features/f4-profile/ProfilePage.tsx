import React from 'react';

import {NavBar} from '../f6-navbar/NavBar';

import {NavBarContainer} from '../f6-navbar/NavBarContainer';

import s from './ProfilePage.module.scss';
import ProfileContainer from './ProfileContainer';
import MyPacksListContainer from './myPacksList/MyPacksListContainer';

export const ProfilePage = () => {
    return (
        <>
            <NavBarContainer/>
            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.sidebar__numberOfCards}>
                        <div>
                            <ProfileContainer/>
                        </div>
                        <div>
                            {/*<SuperDoubleRangeContainer/>*/}
                        </div>
                    </div>
                    <div className={s.myPacksList}><MyPacksListContainer/></div>
                </div>
            </div>
        </>

    );
};

