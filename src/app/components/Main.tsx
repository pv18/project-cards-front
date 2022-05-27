import React from 'react';
import {Routing} from './Routing/Routing';
import {HeaderContainer} from './header/HeaderContainer';

export const Main = () => {
    return (
        <>
            <HeaderContainer/>
            <Routing/>
        </>
    );
};

