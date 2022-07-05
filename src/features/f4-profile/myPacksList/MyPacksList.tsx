import React from 'react';

import {TablePacksContainer} from '../../f8-tablePack/TablePacksContainer';
import PaginationContainer from '../../../components/с4-Pagination/PaginationContainer';

import s from './MyPacksList.module.scss';

import SearchPackContainer from "./searchPack/SearchPackContainer";

const MyPacksList = (/*props: MyPackListPropsType*/) => {
    return (
        <div className={s.block}>
            <div className={s.container}>
                <span className={s.title}> My packs list</span>
                <SearchPackContainer/>
                <div className={s.wrapper_table}>
                    <TablePacksContainer/>
                </div>
                <PaginationContainer/>
            </div>
        </div>
    );
};

export default MyPacksList;