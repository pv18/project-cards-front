import React, {ChangeEvent} from 'react';

import Search from '../../../../assets/img/search.svg';

import s from './SearchPack.module.scss';
type SearchPackPropsType = {
    setPackNameChange: (search: string) => void
    packNameChange:string
}
const SearchPack = (props: SearchPackPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setPackNameChange(e.currentTarget.value);
    };
    return (
        <div className={s.block}>
            <img src={Search} alt='search'/>
            <input type='search'
                   className={s.input}
                   placeholder='Search by question...'
                   value={props.packNameChange}
                   onChange={onChangeHandler}
            />
        </div>
    );
};

export default SearchPack;
