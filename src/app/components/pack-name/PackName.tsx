import React, {useEffect, useState} from 'react';

import {useNavigate, useParams} from 'react-router-dom';

import {useDispatch, useSelector} from 'react-redux';

import Arrow from '../../assets/img/arrow-left.svg';

import {TablePackNameContainer} from '../../../features/f2-PackName/TablePackNameContainer';

import {TableSearch} from '../TableSearch/TableSearch';
import {apiCard} from '../../../features/f2-PackName/api/api';
import {CardPackNameType, setPackNameList} from '../../../features/f2-PackName/api/bll/packNameReducer';
import {AppRootStateType} from '../../store/store';
import {Button} from '../Button/Button';

import {NavBarContainer} from '../navbar/NavBarContainer';

import s from './PackName.module.scss';

export const PackName = () => {
    const [search, setSearch] = useState<string>('');
    const navigate = useNavigate();
    const cards = useSelector<AppRootStateType, CardPackNameType[]>(state => state.packName.cards);
    const dispatch = useDispatch();

    const {packId, pageCount} = useParams();
    const {name} = useParams();

    useEffect(() => {
        if (packId && pageCount) {
            apiCard.getCards({cardsPack_id: packId, pageCount: +pageCount})
                .then(res => {
                    dispatch(setPackNameList(res.data.cards));
                });
        }
    }, []);

    const getFilteredCardsAfterSearch = search === ''
        ? cards
        : cards.filter(c => c.question.toLowerCase().includes(search.toLowerCase()));

    return (
        <div>
            <NavBarContainer/>
            <div className={s.table}>
                <h2 className={s.title}>
                    <img onClick={() => navigate(-1)} src={Arrow} alt='arrow left'/>
                    <span>Pack Name "{name}"</span>
                </h2>
                <div className={s.search}>
                    <TableSearch title={search} changeTitle={setSearch}/>
                    <div className={s.buttonWrap}>
                        <Button width={'200px'}>Add new question</Button>
                    </div>
                </div>
                <TablePackNameContainer data={getFilteredCardsAfterSearch}/>
            </div>
        </div>
    );
};

