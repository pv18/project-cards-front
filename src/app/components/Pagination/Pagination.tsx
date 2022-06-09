import React, {ChangeEvent} from 'react';
import s from './Pagination.module.scss'

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
    const rangePages = 10

    if ( props.currentPage < 10 ) {
        for (let i = 1; i <= 10; i++) {
            pageNumbers.push(i);
        }
    } else if (props.currentPage >= Math.ceil(props.totalCount / props.pageCount)- 10) {
        for (let i = 1; i <= 10; i++)
            pageNumbers.push(i);
        } else {
        for (let i = props.currentPage - rangePages / 2; i <= props.currentPage + rangePages / 2; i++) {
            pageNumbers.push(i);
        }
    }


    const onChangeHandlerRange = (e:ChangeEvent<HTMLSelectElement>) => {
            props.setPageCount(+e.currentTarget.value)
    }
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
                <select onChange={onChangeHandlerRange}>
                    <option value={4}>4</option>
                    <option value={7}>7</option>
                    <option selected value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
            </form>
            <span>Cards per Page</span>
        </div>
    );
};

export default Pagination;