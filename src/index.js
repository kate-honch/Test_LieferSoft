import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker'
// import {store} from "./store/configureStore";
import {Provider} from "react-redux";
import { createStore } from 'redux';

const store = createStore(() => (
  {
    clients: [],
  }
));

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister()
