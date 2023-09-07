import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

export default function NewsList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getAriticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=football&sortBy=publishedAt&apiKey=535a69a0088740faa020385828cb6d70`
      );
      console.log(response);
      setArticles(response.data.articles);
      //   const data = await response.json()
      //   setArticles(data)
    };
    getAriticles();
  }, []);
  return (
    <div className=" NewList">
      {articles.map((article) => {
        return (
          <NewsItem
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
          />
        );
      })}
    </div>
  );
}
