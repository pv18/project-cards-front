import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';

import s from './SuperRadio.module.scss';

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string, i: number) => void
}

export const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    },
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, i: number) => {

        if (onChange) onChange(e);

        if(onChangeOption) {
            onChangeOption(e.currentTarget.value, i);
        }

        // onChange, onChangeOption
    };

    // map options with key
    const mappedOptions = options ? options.map((o, i) => (
        <label className={s.label} key={name + '-' + i}>
            <input
                className={s.input}
                type={'radio'}
                onChange={(e) => onChangeCallback(e, i)}
                name={o}
                checked={o === value}
                value={o}
                // name, checked, value, onChange
            />
            {o}
        </label>
    )) : [];

    return (
        <>
            {mappedOptions}
        </>
    );
};

