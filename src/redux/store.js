import { createStore , combineReducers , applyMiddleware , compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducers';
const initState ={};

const middleware = [thunk];

const reducer = combineReducers ({
        data : dataReducer
});
const store = createStore(  
                        reducer, 
                            initState ,
                             applyMiddleware(...middleware)    
                        );

export default store;
