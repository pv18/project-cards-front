import React from 'react';
import Arrow from '../../assets/img/arrow-left.svg';
import s from './PackName.module.scss';
import {TablePackNameContainer} from '../../../features/f2-PackName/TablePackNameContainer';

export const PackName = () => {

    return (
        <div className={s.wrapper}>
            <div>ЗДЕСЬ БУДЕТ HEADER</div>
            <div className={s.table}>
                <h2 className={s.title}>
                    <img src={Arrow} alt="arrow left"/>
                    <span>Pack Name</span>
                </h2>
                <div className={s.search}></div>
                <TablePackNameContainer/>
            </div>
        </div>
    );
};

