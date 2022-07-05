import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';

import s from './SuperCheckbox.module.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    },
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let checked = e.currentTarget.checked;

        onChangeChecked && onChangeChecked(checked);

        onChange && onChange(e);
        // сделайте так чтоб работал onChange и onChangeChecked
    };

    // const finalInputClassName = `${s.checkbox} ${className ? className : ''}`;
    const finalInputClassName = `${className ? className : s.label}`;
    const descriptionClassName = `${spanClassName ? spanClassName : ''}`;

    return (
        <>
            <label className={finalInputClassName}>
                <input
                    type={'checkbox'}
                    onChange={onChangeCallback}

                    {...restProps}
                />
                <span/>
                {children && <div className={descriptionClassName}>{children}</div>}
            </label>
        </>
    );
};

export default SuperCheckbox;
