import React from 'react';

import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

import {Main} from './components/Main';
import {store} from './store/store';

const App = () => {
    return (
        <>
            <HashRouter>
                <Provider store={store}>
                    <Main/>
                </Provider>
            </HashRouter>
        </>
    );
};

export default App;