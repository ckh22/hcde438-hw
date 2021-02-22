import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {configureStore} from './App/Store/configureStore'
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore()

function render() {
    ReactDOM.render (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Router><App/></Router>
            </PersistGate>
        </Provider>,
        document.getElementById('root')
    );
}

if (module.hot) {
    module.hot.accept("./App", function () {
        setTimeout(render);
    })
}

render()
