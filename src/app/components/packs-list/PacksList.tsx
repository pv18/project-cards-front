import React from 'react';

import {TablePacksContainer} from '../tablePack/TablePacksContainer';

import s from './PacksList.module.scss';

export const PacksList = () => {
    return (
        <div className={s.wrapper}>
            <div>ЗДЕСЬ БУДЕТ HEADER</div>
            <div className={s.table}>
                <div className={s.leftBar}>
                    <h4 className={s.title}>Show packs cards</h4>
                    <h4 className={s.title}>Number of cards</h4>
                </div>
                <div className={s.main}>
                    <h2 className={s.title}>Packs list</h2>
                    <TablePacksContainer/>
                </div>
            </div>
        </div>
    );
};

