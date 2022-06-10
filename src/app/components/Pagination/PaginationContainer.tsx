import React, {useEffect, useState} from 'react';

import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {setPagination} from '../../store/reducers/appReducer';

import Pagination from './Pagination';

const PaginationContainer = () => {
    const dispatch = AppDispatch();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageCount, setPageCount] = useState<number>(8);


    useEffect(() => {
        dispatch(setPagination(pageCount, currentPage));
    }, [currentPage, pageCount]);

    const totalCount = useSelector<AppRootStateType, number>(state => state.tablePacks.cardPacksTotalCount);


    const prevPage = () => {
        return currentPage > 1
            ? setCurrentPage(currentPage - 1)
            : 1;
    };
    const nextPage = () => {
        return currentPage < Math.ceil(totalCount / pageCount)
            ? setCurrentPage(currentPage + 1)
            : 1;
    };
    return (
        <div>
            <Pagination pageCount={pageCount}
                        totalCount={totalCount}
                        currentPage={currentPage}
                        setPageCount={setPageCount}
                        setCurrentPage={setCurrentPage}
                        prevPage={prevPage}
                        nextPage={nextPage}
            />
        </div>);
};

export default PaginationContainer;