import NewsItem from "./NewsItem";


export default function NewsList({articles}) {
  return (
    <div className=" NewList">
      {articles.map((article) => {
        return (
          <div className="newList-app">
            {/* <SearchBar articlesearch={getAriticles} /> */}
            <NewsItem
              title={article.title}
              description={article.description}
              url={article.url}
              urlToImage={article.urlToImage}
            />
          </div>
        );
      })}
    </div>
  );
}
