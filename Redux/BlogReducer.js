const initialState = {
  blogArticle: {key: 'value'},
};

export default function BlogReducer(state = initialState, action) {
  switch (action.type) {
    case 'ARTICLE_SELECTED':
      return {
        ...state,
        blogArticle: action.blogArticle,
      };
    default:
      return state;
  }
}
