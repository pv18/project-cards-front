import React from 'react';

import {TablePacksContainer} from '../f8-tablePack/TablePacksContainer';
import PaginationContainer from '../../components/с4-Pagination/PaginationContainer';

import MyAll from '../f9-my-all/MyAll';
import {NavBarContainer} from '../f6-navbar/NavBarContainer';

import s from './PacksList.module.scss';

export const PacksList = () => {

    return (
        <>
            <NavBarContainer/>
            <div className={s.wrapper}>
                <div className={s.table}>
                    <div className={s.leftBar}>
                        <h4 className={s.title}>Show packs cards</h4>
                        <MyAll/>
                        <h4 className={s.title}>Number of cards</h4>
                    </div>
                    <div className={s.main}>
                        <h2 className={s.title}>Packs list</h2>
                        <TablePacksContainer/>
                        <PaginationContainer/>
                    </div>
                </div>
            </div>
        </>
    );
};

