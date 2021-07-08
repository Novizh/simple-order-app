import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import orderReducer from './reducers/orderReducer';

const reducers = combineReducers({
    orderReducer
})

const middleware = applyMiddleware(ReduxThunk);

const store = createStore(reducers, middleware)

export default store;