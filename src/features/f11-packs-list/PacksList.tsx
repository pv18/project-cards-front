import React from 'react';

import {TablePacksContainer} from '../f8-tablePack/TablePacksContainer';
import PaginationContainer from '../../components/c4-Pagination/PaginationContainer';

import {NavBarContainer} from '../f6-navbar/NavBarContainer';

import MultiRangeSliderContainer from '../f13-MultiRangeSliderContainer/MultiRangeSliderContainer';
import MyAllContainer from '../f9-my-all/MyAllContainer';

import s from './PacksList.module.scss';

export const PacksList = () => {

    return (
        <>
            <NavBarContainer/>
            <div className={s.wrapper}>
                <div className={s.table}>
                    <div className={s.leftBar}>
                        <h4 className={s.title}>Show packs cards</h4>
                        <MyAllContainer/>
                        <h4 className={s.title}>Number of cards</h4>
                        <MultiRangeSliderContainer/>
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

