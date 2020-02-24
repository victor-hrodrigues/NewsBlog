function requestArticleList() {
  return {
    type: 'REQUEST_ARTICLES',
    payload: true,
  }
}

function loadArticleList(articleList) {
  return {
    type: 'LOAD_ARTICLES',
    payload: articleList,
  };
}

export function selectedArticle(blogArticle) {
  return {
    type: 'ARTICLE_SELECTED',
    payload: blogArticle,
  };
}

export function fetchArticleList() {
  return function (dispatch) {
    dispatch(requestArticleList());

    return fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=182f1afa57654f4bae6bb4db84907699')
      .then(response => response.json())
      .then(responseJson => dispatch(loadArticleList(responseJson.articles)))
      .catch(error => { console.error(error); });
  }
}