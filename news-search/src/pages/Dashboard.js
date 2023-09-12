import React from 'react'
// import { useState, useEffect } from "react";
// import axios from "axios";
// import NewsItem from '../components/NewsItem';

export default function Dashboard() {
//     const [articles, setArticles] = useState([]);
//   const getAriticles = async (searchterm) => {
//     try {const response = await axios.get(
//       `https://newsapi.org/v2/top-headlines?country=us&apiKey=535a69a0088740faa020385828cb6d70`
//     );
//     console.log(response);
//     setArticles(response.data.articles);
//     //   const data = await response.json()
//     //   setArticles(data)
//   }catch(e) {
// console.error(e)
//   }
// }
//   useEffect(() => {
//     getAriticles("searchterm");
//   }, []);

  return (
    <div>Dashboard</div>
  )
}
// return (
//     <div className=" NewList">
//       {articles.map((article) => {
//         return (
//           <div className="newList-app">
//             <NewsItem
//               title={article.title}
//               description={article.description}
//               url={article.url}
//               urlToImage={article.urlToImage}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }