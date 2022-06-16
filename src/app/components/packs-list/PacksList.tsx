import React, {useState} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {TablePacksContainer} from '../tablePack/TablePacksContainer';
import PaginationContainer from '../Pagination/PaginationContainer';

import MyAll from '../my-all/MyAll';
import {Modal} from '../Modal/Modal';
import {NavBarContainer} from '../navbar/NavBarContainer';
import {Button} from '../Button/Button';

import {AppRootStateType} from '../../store/store';

import {changeModalADD, changeModalDelete} from '../../store/reducers/modalsReducer';

import s from './PacksList.module.scss';
import {ModalDelete} from './modals/deleteModal/ModalDelete';
import {ModalAdd} from './modals/addModal/ModalAdd';

export const PacksList = () => {
    const isDelete = useSelector<AppRootStateType, boolean>(state => state.modals.modalDelete);
    const isADD = useSelector<AppRootStateType, boolean>(state => state.modals.modalADD);
    const dispatch = useDispatch();

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

