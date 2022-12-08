import React, {ChangeEvent, RefObject} from 'react';

import s from './MultiRangeSlider.module.scss';

type MultiRangeSliderPropsType = {
    minCardsCount: number
    maxCardsCount: number
    currentMinValue:number
    currentMaxValue: number
    rangeRef: RefObject<HTMLInputElement>
    setCurrentMinValue: (value: number) => void
    setCurrentMaxValue: (value: number) => void
    onKeyUp: () => void
}

const MultiRangeSlider = (props: MultiRangeSliderPropsType) => {
    const leftRange = props.minCardsCount;
    const rightRange = props.maxCardsCount;
    const onChangeRangeMin = (e: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(Number(e.target.value), props.currentMaxValue - 1);
            props.setCurrentMinValue(value);
    }

    const onChangeRangeMax = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(e.target.value), props.currentMinValue + 1);
        props.setCurrentMaxValue(value);
    }
console.log(`min: ${props.minCardsCount}, currentMinValue: ${props.currentMinValue}, maxCardsCount: ${props.maxCardsCount}, currentMaxValue: ${props.currentMaxValue}`)
    return (
        <div className={s.container}>
            <input
                type='range'
                min={props.minCardsCount}
                max={props.maxCardsCount}
                value={props.currentMinValue}
                onChange={onChangeRangeMin}
                className={`${s.thumb} + ${s.thumb__left}`}
                style={{zIndex: props.currentMinValue > props.maxCardsCount - 100 ? '5' : undefined}}
                onMouseLeave={props.onKeyUp}
                data-currentMinValue = {props.currentMinValue}
            />
            <input
                type='range'
                min={props.minCardsCount}
                max={props.maxCardsCount}
                value={props.currentMaxValue}
                onChange={onChangeRangeMax}
                className={`${s.thumb} + ${s.thumb__right}`}
                onMouseLeave={props.onKeyUp}
                data-currentMaxValue = {props.currentMaxValue}
            />

            <div className={s.slider}>
                <div className={s.slider__track}/>
                <div ref={props.rangeRef} className={s.slider__range}/>
                <div className={s.slider__left_value}>{leftRange}</div>
                <div className={s.slider__right_value}>{rightRange}</div>
            </div>
        </div>
    );
};

export default MultiRangeSlider;
