import { combineReducers } from 'redux';

export function requestedArticlesReducer(state = {}, action) {
  switch (action.type) {
    case 'REQUEST_ARTICLES':
      return action.payload;

    default:
      return state;
  }
}

export function loadedArticlesReducer(state = {}, action) {
  switch (action.type) {
    case 'LOAD_ARTICLES':
      return action.payload;

    default:
      return state;
  }
}

export function selectedArticleReducer(state = {}, action) {
  switch (action.type) {
    case 'ARTICLE_SELECTED':
      return action.payload;

    default:
      return state;
  }
}

const RootReducer = combineReducers({
  request: requestedArticlesReducer,
  posts: loadedArticlesReducer,
  article: selectedArticleReducer
});

export default RootReducer;