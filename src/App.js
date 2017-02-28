import React from 'react';
import { View, Text } from 'react-native';
import { createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducers from './reducers';
import Router from './Router';

const App = () => {
    const store = createStore(
        rootReducers,
        applyMiddleware(thunk)
    );

    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
