import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import NewsList from "./components/newsList/NewsList";
import SearchBar from "./components/searchBar/SearchBar";
import Nav from "./components/nav/Nav";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import News from "./pages/News";
function App() {
  const [articles, setArticles] = useState([]);
  const getAriticles = async (searchterm) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchterm}&sortBy=publishedAt&apiKey=535a69a0088740faa020385828cb6d70`
      );
      console.log(response);
      setArticles(response.data.articles);
      //   const data = await response.json()
      //   setArticles(data)
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getAriticles("football");
  }, []);

  return (
    <div className=" App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/News" element={<Dashboard />} />
        <Route path="/News/:symbol" element={<News />} />
      </Routes>
      <SearchBar articlesearch={getAriticles} />
      <NewsList articles={articles} />
    </div>
  );
}

export default App;
