import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from './store/store';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = configureStore();

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Global></Global>
            <App />
        </React.StrictMode>
    </Provider>
);
