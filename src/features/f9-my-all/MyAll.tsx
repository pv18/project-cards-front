import React from 'react';

import s from './MyAll.module.scss';

type MyAllPropsType = {
    isId: boolean
    isLoading: boolean
    onclickHandlerMy: () => void
    onclickHandlerAll: () => void
}
const MyAll = (props: MyAllPropsType) => {
    return (
        <div className={s.block}>
            <button className={!props.isId ? s.primary : s.active}
                    onClick={props.onclickHandlerMy}
                    disabled={props.isLoading}
                    data-descriptions='Show only own cards.'
            >My</button>
            <button className={props.isId ? s.primary : s.active}
                    onClick={props.onclickHandlerAll}
                    disabled={props.isLoading}
                    data-descriptions='Show all cards.'
            >All</button>
        </div>
    );
};

export default MyAll;