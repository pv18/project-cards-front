import React from 'react';

import {NavBarContainer} from '../f6-navbar/NavBarContainer';

import ProfileContainer from './ProfileContainer';

export const ProfilePage = () => {
    return (
        <>
            <NavBarContainer/>
            <ProfileContainer/>
{/*            <div className={s.block}>
                <div className={s.container}>
                    <div className={s.sidebar__numberOfCards}>
                        <div>
                            <ProfileContainer/>
                        </div>
                        <div>
                            <SuperDoubleRangeContainer/>
                        </div>
                    </div>
                    <div className={s.myPacksList}><MyPacksListContainer/></div>
                </div>
            </div>*/}
        </>

    );
};

