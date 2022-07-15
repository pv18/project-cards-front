import React, {useState} from 'react';

import Search from '../../assets/img/search.svg';

import s from './TableSearch.module.scss';

interface ITableSearchProps {
    title: string
    changeTitle: (newTitle: string) => void
    isLoading: boolean
}

export const TableSearch: React.FC<ITableSearchProps> = (props) => {
    return (
        <div className={s.wrapper}>
            <span><img src={Search} alt='search'/></span>
            <input type='search'
                   className={s.input}
                   placeholder='Search by question...'
                   value={props.title}
                   onChange={(e) => props.changeTitle(e.currentTarget.value)}
                   disabled={props.isLoading}
            />
        </div>
    );
};

