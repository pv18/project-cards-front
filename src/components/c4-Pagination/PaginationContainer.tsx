import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {setPagination} from '../../store/reducers/appReducer';

import {ParamsType} from '../../store/reducers/tablePacksReducer';

import Pagination from './Pagination';

const PaginationContainer = () => {
    const dispatch = AppDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(8);
    const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.app.isLoading);
    const params = useSelector<AppRootStateType, ParamsType>(state => state.tablePacks.params);


    useEffect(() => {
        dispatch(setPagination(pageCount, currentPage));
    }, [currentPage, pageCount, dispatch]);

    useEffect(() => {
        setCurrentPage(1);
    }, [isId, params]);

    const totalCount = useSelector<AppRootStateType, number>(state => state.tablePacks.cardPacksTotalCount);
    const totalPages = Math.ceil(totalCount / pageCount);

    const prevPage = () => {
        return currentPage > 1
            ? setCurrentPage(currentPage - 1)
            : 1;
    };
    const nextPage = () => {
        return currentPage < totalPages
            ? setCurrentPage(currentPage + 1)
            : 1;
    };

    return (
        <div>
            <Pagination totalPages={totalPages}
                        currentPage={currentPage}
                        setPageCount={setPageCount}
                        setCurrentPage={setCurrentPage}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        isLoading={isLoading}
            />
        </div>);
};

export default PaginationContainer;