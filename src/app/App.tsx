import React from 'react';
import {Main} from './components/Main';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
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