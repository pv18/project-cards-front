import React, {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {Dispatch} from 'redux';

import {AppRootStateType} from '../../store/store';

import s from './TablePacks.module.scss';
import {apiCards} from './api/api';

import {CardPacksType, PackListActionType, setPackList} from './api/n0-bll/packListReducer';

export const TablePacks = () => {

    const dispatch = useDispatch<Dispatch<PackListActionType>>();

    const cardPacks = useSelector<AppRootStateType, Array<CardPacksType>>(state => state.tablePacks.cardPacks);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);


    useEffect(() => {
        apiCards.getCards({pageCount: 10, page: 1})
            .then(res => {
                // console.log(res.data);
                dispatch(setPackList(res.data));
            })
            .catch(err => {
                // console.log(err);
            });
    }, []);

    // для удаления pack карточек
    const onClickDeletePack = (id: string) => {
        apiCards.deletePack(id);
    };

    const renderCardsPacks = (): any => {
        return cardPacks.map(el => {
            return (
                <tr key={el._id} className={s.table__wrap}>
                    <th>{el.name}</th>
                    <th>{el.cardsCount}</th>
                    <th>18.03.2021-date</th>
                    <th>{el.user_name}</th>
                    <th>
                        <button onClick={() => onClickDeletePack(el._id)}
                                disabled={isLoading}
                        >Delete</button>
                        <button disabled={isLoading}>Edit</button>
                        <button disabled={isLoading}>Learn</button>
                    </th>
                </tr>
            );
        });
    };

    return (
        <div className={s.tablePacks}>
            <table className={s.table}>
                <thead className={s.table__head}>
                <tr className={s.table__wrap}>
                    <th>Name</th>
                    <th>Cards</th>
                    <th>Last Updated</th>
                    <th>Created by</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody className={s.table__body}>
                {renderCardsPacks()}
                </tbody>
            </table>
        </div>
    );
};

