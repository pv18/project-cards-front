import React from 'react';

import {Button} from '../Button/Button';
import {TextField} from '../Textfield/TextField';
import {PackListContainer} from '../../../features/f1-PacksList/PackListContainer';

export const TestPage = () => {
    return (
        <div>
            <Button>remove</Button>
            <TextField/>
            <TextField type={'password'}/>
            
            {/*<PackListContainer />*/}
        </div>
    );
};

