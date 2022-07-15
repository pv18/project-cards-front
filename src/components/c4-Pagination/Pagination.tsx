import React, {ChangeEvent} from 'react';

import s from './Pagination.module.scss';

type PaginationPropsType = {
    totalPages: number
    currentPage: number
    isLoading: boolean
    setPageCount: (rangePages: number) => void
    setCurrentPage: (pageCount: number) => void
    prevPage: () => void
    nextPage: () => void
}

const getRange = (start: number, end: number) => {
    return Array(end - start + 1)
        .fill(end - start + 1)
        .map((el, indexCurrentElement) => indexCurrentElement + start);
};


const Pagination = (props: PaginationPropsType) => {

    const onChangeHandlerRange = (e: ChangeEvent<HTMLSelectElement>) => {
        props.setPageCount(+e.currentTarget.value);
    };

    let delta: number;
    if (props.totalPages <= 7) {
        // delta === 7: [1 2 3 4 5 6 7]
        delta = 7;
    } else {
        // delta === 2: [1 ... 4 5 6 ... 10]
        // delta === 4: [1 2 3 4 5 ... 10]
        delta = props.currentPage > 4 && props.currentPage < props.totalPages - 3 ? 2 : 4;
    }
    const range = {
        start: Math.round(props.currentPage - delta / 2),
        end: Math.round(props.currentPage + delta / 2),
    };

    if (range.start - 1 === 1 || range.end + 1 === props.totalPages) {
        range.start += 1;
        range.end += 1;
    }
    let pages: any =
        props.currentPage > delta
            ? getRange(Math.min(range.start, props.totalPages - delta), Math.min(range.end, props.totalPages))
            : getRange(1, Math.min(props.totalPages, delta + 1));

    const withDots = (value: number, pair: Array<any>) => (pages.length + 1 !== props.totalPages ? pair : [value]);

    if (pages[0] !== 1) {
        pages = withDots(1, [1, '...']).concat(pages);
    }

    if (pages[pages.length - 1] < props.totalPages) {
        pages = pages.concat(withDots(props.totalPages, ['...', props.totalPages]));
    }
    return (
        <div className={s.block}>
            <button onClick={props.prevPage}
                    disabled={props.isLoading}
            >{'<'}</button>
            <div className={s.block__pages}>
                {pages.map((page: number | '...') => (
                    (page !== '...')
                        ? <button
                            key={page}
                            className={page === props.currentPage ? s.page_active : s.page}
                            onClick={() => props.setCurrentPage(page)}
                            disabled={props.isLoading}
                        >
                            {page}
                        </button>
                        : <span>...</span>
                ))}
            </div>
            <button onClick={props.nextPage}
                    disabled={props.isLoading}
            >{'>'}</button>
            <span>Show</span>
            <form>
                <select defaultValue={8} onChange={onChangeHandlerRange} disabled={props.isLoading}>
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