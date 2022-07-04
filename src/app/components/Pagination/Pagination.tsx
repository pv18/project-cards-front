import React, {ChangeEvent} from 'react';

import s from './Pagination.module.scss';

type PaginationPropsType = {
    pageCount: number
    totalCount: number
    currentPage: number
    setPageCount: (rangePages:number)=>void
    setCurrentPage: (pageCount: number) => void
    prevPage: () => void
    nextPage: () => void
}

const Pagination = (props: PaginationPropsType) => {
    const pageNumbers = [];
    const rangePages = 10;

    if ( props.currentPage < rangePages ) {
        for (let i = 1; i <= rangePages; i++) {
            pageNumbers.push(i);
        }
    } else if (props.currentPage >= Math.ceil(props.totalCount / props.pageCount)- rangePages) {
        for (let i = 1; i <= rangePages; i++)
            pageNumbers.push(i);
        } else {
        for (let i = props.currentPage - rangePages / 2; i <= props.currentPage + rangePages / 2; i++) {
            pageNumbers.push(i);
        }
    }


    const onChangeHandlerRange = (e:ChangeEvent<HTMLSelectElement>) => {
            props.setPageCount(+e.currentTarget.value);
    };
    return (
        <div className={s.block}>
            <button onClick={props.prevPage}>Prev</button>
            <div className={s.block__pages}>
                {pageNumbers.map((page) => (
                    <button
                        key={page}
                        className={page === props.currentPage ? s.page_active : s.page}
                        onClick={() => props.setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}
            </div>
            <button onClick={props.nextPage}>Next</button>
            <span>Show</span>
            <form>
                <select defaultValue={8} onChange={onChangeHandlerRange}>
                    <option value={4}>4</option>
                    <option value={6}>6</option>
                    <option value={8}>8</option>
                    <option value={10}>10</option>
                </select>
            </form>
            <span>Cards per Page</span>
        </div>
    );
};

export default Pagination;