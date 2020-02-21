import {createStore} from 'redux';
import BlogReducer from './BlogReducer';

const BlogDataStore = createStore(BlogReducer);

export default BlogDataStore;
