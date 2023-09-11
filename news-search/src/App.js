import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsList from "./components/NewsList";
import SearchBar from "./components/searchBar/SearchBar";
function App() {
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
    <div className=" App">
      <SearchBar articlesearch={getAriticles} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
