import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../../store/store';
import PaginationContainer from '../../Pagination/PaginationContainer';
import { apiCards } from '../../../../features/f1-PacksList/api/api';

import {TablePacksContainer} from '../../tablePack/TablePacksContainer';
import {setPackName} from '../../../store/reducers/appReducer';

import SearchPack from './searchPack/SearchPack';


const MyPacksListContainer = () => {
    const dispatch = AppDispatch();
    const myId = useSelector<AppRootStateType, string>(state => state.profile.userData._id);
    const [packNameChange, setPackNameChange] = useState<string>('');
        useEffect(() => {
            apiCards.getCards({user_id: myId})
                .then(res => {
                    dispatch(setPackName(packNameChange));
                })
                .catch(err => {
                    // console.log(err);
                });
        },[myId]);

    return (
        <div>
            My packs list
            <SearchPack setPackNameChange={setPackNameChange} packNameChange={packNameChange}/>
            <TablePacksContainer id={myId}/>
            <PaginationContainer />
        </div>
    );
};

export default MyPacksListContainer;