import {useEffect, useState} from "react";

export const useDebounce = (value: any, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState<any>(value);

    // Состояние и сеттер
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
    // Вернет функцию очистки, которая будет вызываться каждый раз, когда value изменено а delay не закончился.
        return () => {
            clearTimeout(timeoutId);
        };
    }, [value]);

    return debouncedValue;
};