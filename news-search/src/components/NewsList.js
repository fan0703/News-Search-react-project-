import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import SearchBar from "./searchBar/SearchBar";

export default function NewsList() {
  const [articles, setArticles] = useState([]);
  const getAriticles = async (searchterm) => {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchterm}&sortBy=publishedAt&apiKey=535a69a0088740faa020385828cb6d70`
    );
    console.log(response);
    setArticles(response.data.articles);
    //   const data = await response.json()
    //   setArticles(data)
  };
  useEffect(() => {
    getAriticles("searchterm");
  }, []);
  return (
    <div className=" NewList">
      {articles.map((article) => {
        return (
          <div className="newList-app">
            <SearchBar articlesearch={getAriticles} />
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
