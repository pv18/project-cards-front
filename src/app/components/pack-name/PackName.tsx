import React from 'react';

import {useNavigate} from 'react-router-dom';

import Arrow from '../../assets/img/arrow-left.svg';

import {TablePackNameContainer} from '../../../features/f2-PackName/TablePackNameContainer';

import s from './PackName.module.scss';

export const PackName = () => {
    
    const navigate = useNavigate();

    return (
        <div className={s.wrapper}>
            <div>ЗДЕСЬ БУДЕТ HEADER</div>
            <div className={s.table}>
                <h2 className={s.title}>
                    <img onClick={() => navigate(-1)} src={Arrow} alt='arrow left'/>
                    <span>Pack Name</span>
                </h2>
                <div className={s.search}></div>
                <TablePackNameContainer/>
            </div>
        </div>
    );
};

