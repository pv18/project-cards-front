import React from 'react';

import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './store/store';
import {Routing} from './app/Routing/Routing';

const App = () => {
    return (
        <>
            <HashRouter>
                <Provider store={store}>
                    <Routing/>
                </Provider>
            </HashRouter>
        </>
    );
};

export default App;