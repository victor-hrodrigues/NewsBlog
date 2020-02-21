function selectedArticle(blogArticle) {
  return {
    type: 'ARTICLE_SELECTED',
    blogArticle: blogArticle,
  };
}

export default selectedArticle;
