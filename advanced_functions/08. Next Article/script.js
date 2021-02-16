function getArticleGenerator(articles) {
  function keep() {
    if (articles.length != 0) {
      let newArticle = document.createElement("article");
      document.getElementById("content").appendChild(newArticle);
      document.querySelector("#content").lastChild.textContent = articles[0];
      articles.shift();
    }
    return;
  }

  return keep;
  // TODO
}
