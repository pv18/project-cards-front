import React, {ChangeEvent, useState} from 'react';
import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import SuperDoubleRange from '../../components/c8-SuperDoubleRange/SuperDoubleRange';
import {setMinMax} from '../../store/reducers/tablePacksReducer';

const DoubleRange = () => {
    const minCardsCount = useSelector<AppRootStateType, number>(state => state.packList.minCardsCount);
    const maxCardsCount = useSelector<AppRootStateType, number>(state => state.packList.maxCardsCount);
    const [range, setRange] = useState<Array<number>>([minCardsCount, maxCardsCount]);

    const dispatch = AppDispatch();
    const onChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setRange([+e.currentTarget.value, range[1]]);
    };
    const onChangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        setRange([range[0], +e.currentTarget.value]);
    };
    const onClickHandler = () => {
        dispatch(setMinMax(range[0], range[1]));
    };
    return (
        /*<SuperDoubleRange/>*/
        <>
            <input type='text'
                   value={range[0]}
                   onChange={onChangeMin}
                   onFocus={(e) => e.target.select()}/>
            <input type='text'
                   value={range[1]}
                   onChange={onChangeMax}
                   onFocus={(e) => e.target.select()}/>
            <button onClick={onClickHandler}> Show cards</button>
        </>
    );
};

export default DoubleRange;