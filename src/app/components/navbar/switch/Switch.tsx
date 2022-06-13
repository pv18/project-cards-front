import React, {useState} from 'react';
import {ReactComponent as Cards} from '../../../assets/img/cards.svg';
import {ReactComponent as User} from '../../../assets/img/profile.svg';
import s from './Switch.module.scss';

type FilterType = 'cards' | 'user'

export const Switch = () => {
    const [active, setActive] = useState<FilterType>('cards')

    const clickHandler = (value: FilterType) => {
        setActive(value)
    }

    return (
        <div className={s.wrapper}>
            <div className={active === 'cards' ? s.active : s.block}
                 onClick={() => clickHandler('cards')}
            >
                <Cards className={s.icon}/>
                <span>Packs list</span>
            </div>
            <div className={active === 'user' ? s.active : s.block}
                 onClick={() => clickHandler('user')}
            >
                <User className={s.icon}/>
                <span>Profile</span>
            </div>
        </div>
    );
};

