import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import RootReducer from './Blog.reducers';

export const BlogDataStore = createStore(RootReducer, applyMiddleware(thunkMiddleware));