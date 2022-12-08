import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useSelector} from 'react-redux';

import {AppDispatch, AppRootStateType} from '../../store/store';
import {setMinMax} from '../../store/reducers/tablePacksReducer';
import MultiRangeSlider from '../../components/c7-MultiRangeSlider/MultiRangeSlider';

const MultiRangeSliderContainer = () => {
    const minCardsCount = useSelector<AppRootStateType, number>(state => state.tablePacks.minCardsCount);
    const maxCardsCount = useSelector<AppRootStateType, number>(state => state.tablePacks.maxCardsCount);
    const isId = useSelector<AppRootStateType, boolean>(state => state.app.isId);
    const [currentMinValue, setCurrentMinValue] = useState(minCardsCount);
    const [currentMaxValue, setCurrentMaxValue] = useState(maxCardsCount);
    const rangeRef = useRef<HTMLInputElement>(null);

    const dispatch = AppDispatch();

    useEffect(()=>{
        setCurrentMinValue(minCardsCount);
        setCurrentMaxValue(maxCardsCount);
    }, [isId, minCardsCount, maxCardsCount]);

    const onKeyUp = () => {
        dispatch(setMinMax(currentMinValue, currentMaxValue));
    };

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => {
            return Math.round(((value - minCardsCount) / (maxCardsCount - minCardsCount)) * 100)
        },
        [minCardsCount, maxCardsCount, isId],
    );

        // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(currentMinValue);
        const maxPercent = getPercent(currentMaxValue);
        if (rangeRef.current) {
            rangeRef.current.style.left = `${minPercent}%`;
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [currentMinValue, isId]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(currentMinValue);
        const maxPercent = getPercent(currentMaxValue);
        if (rangeRef.current) {
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [currentMaxValue, isId]);
    return (
        <MultiRangeSlider
            minCardsCount={minCardsCount}
            maxCardsCount={maxCardsCount}
            onKeyUp={onKeyUp}
            rangeRef={rangeRef}
            currentMinValue={currentMinValue}
            setCurrentMinValue={setCurrentMinValue}
            currentMaxValue={currentMaxValue}
            setCurrentMaxValue={setCurrentMaxValue}
        />
    );
};

export default MultiRangeSliderContainer;