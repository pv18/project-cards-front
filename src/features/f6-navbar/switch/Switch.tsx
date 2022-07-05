import React, {useState} from 'react';

import {useNavigate} from 'react-router-dom';

import {ReactComponent as Cards} from '../../../assets/img/cards.svg';
import {ReactComponent as User} from '../../../assets/img/profile.svg';

import {PATH} from '../../../app/Routing/Routing';

import s from './Switch.module.scss';

type FilterType = 'cards' | 'user'

export const Switch = () => {
    const [active, setActive] = useState<FilterType>('cards');

    const navigate = useNavigate();

    const clickHandler = (value: FilterType) => {
        setActive(value);
    };

    return (
        <div className={s.wrapper}>
            <div className={active === 'cards' ? s.active : s.block}
                 onClick={() => {
                     clickHandler('cards');
                     // navigate(PATH.PACKS_LIST);
                 }}
            >
                <Cards className={s.icon}/>
                <span>Packs list</span>
            </div>
            <div className={active === 'user' ? s.active : s.block}
                 onClick={() => {
                     clickHandler('user');
                     // navigate(PATH.PROFILE);
                 }}
            >
                <User className={s.icon}/>
                <span>Profile</span>
            </div>
        </div>
    );
};

