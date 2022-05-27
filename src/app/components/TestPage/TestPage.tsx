import React from 'react';
import {Button} from '../Button/Button';
import {TextField} from '../Textfield/TextField';

export const TestPage = () => {
    return (
        <div>
            <Button>remove</Button>
            <TextField/>
            <TextField type={'password'}/>
        </div>
    );
};

