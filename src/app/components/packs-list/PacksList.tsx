import React from 'react';

import {TablePacksContainer} from '../tablePack/TablePacksContainer';
import PaginationContainer from '../Pagination/PaginationContainer';

import MyAll from '../my-all/MyAll';
import {NavBarContainer} from '../navbar/NavBarContainer';

import s from './PacksList.module.scss';

export const PacksList = () => {

    return (
        <div className={s.wrapper}>
            <NavBarContainer/>
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
    );
};

