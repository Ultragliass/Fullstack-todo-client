import { reducer } from './reducer';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, Middleware } from 'redux';

export function createReduxStore() {
    const logger: Middleware = createLogger();
    const middleware = composeWithDevTools(applyMiddleware(logger, thunk));
    return createStore(reducer, middleware);
}