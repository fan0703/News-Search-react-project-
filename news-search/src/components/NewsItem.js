import React from "react";

export default function NewsItem({ title, description, url, urlToImage }) {
  return (
    <div className="NewsItem">
      <img className="newsImage" src={urlToImage} alt={urlToImage} />
      <h2><a href={url}>{title}</a></h2>
      <p>{description}</p>
    </div>
  );
}
