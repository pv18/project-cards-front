import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {setPackNameForSearch} from '../../../../store/reducers/appReducer';

import {AppDispatch, AppRootStateType} from '../../../../store/store';

import SearchPack from './SearchPack';


const SearchPackContainer = () => {
    
    const dispatch = AppDispatch();
    const packName = useSelector<AppRootStateType, string>(state => state.app.packName);
    const [packNameChange, setPackNameChange] = useState<string>(packName);
    
    useEffect(() => {
        dispatch(setPackNameForSearch(packNameChange));
    }, [packNameChange, dispatch]);
    
    return (
            <SearchPack setPackNameChange={setPackNameChange} packNameChange={packNameChange} />
    );
};

export default SearchPackContainer;