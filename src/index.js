import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';

const CallMiddleware = store => nextMiddle => action => {
    console.log('1. 첫 번째 미들웨어 reducer 실행 전');
    console.log('2. 첫 번째 미들웨어 action.type : '+action.type+', store str : '+store.getState().data.str);
    let result = nextMiddle(action);
    console.log('7. 첫 번째 미들웨어 reducer 실행 후');
    console.log('8. 첫 번째 미들웨어 action.type : '+action.type+', store str : '+store.getState().data.str);
    return result;
}

const CallMiddleware2 = store => nextMiddle => action => {
    console.log('3. 두 번째 미들웨어 reducer 실행 전');
    console.log('4. 두 번째 미들웨어 action.type : '+action.type+', store str : '+store.getState().data.str);
    let result = nextMiddle(action);
    console.log('5. 두 번째 미들웨어 reducer 실행 후');
    console.log('6. 두 번째 미들웨어 action.type : '+action.type+', store str : '+store.getState().data.str);
    return result;
}

const store = createStore(reducers, applyMiddleware(CallMiddleware, CallMiddleware2));

const listener = ()=> {
    ReactDOM.render(
        <Provider store={store}>
            <App indexProp='react'/>
        </Provider>,
        document.getElementById('root')
    );
}

store.subscribe(listener);
listener();