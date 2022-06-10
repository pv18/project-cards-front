import React, {ChangeEvent} from 'react';

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
            <div className={s.icon}> </div>
            <input onChange={onChangeHandler} value={props.packNameChange}/>
        </div>
    );
};

export default SearchPack;
