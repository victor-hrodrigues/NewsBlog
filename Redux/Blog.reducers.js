import { combineReducers } from 'redux';

const initialState = {
  loading: true,
  posts: [],
  article: {}
}

export function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_ARTICLES':
      return { ...state, loading: true };
      case 'LOAD_ARTICLES':
      return { ...state, loading: false, posts: action.payload }
      case 'ARTICLE_SELECTED':
      return { ...state, article: action.payload }

    default:
      return state;
  }
}

const RootReducer = combineReducers({
  blog: articlesReducer,
});

export default RootReducer;