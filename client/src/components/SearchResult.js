import React, {useState} from "react";
import Saved from "../pages/Saved";

const SearchResult = ({ book, saveBook }) => {
  
  const bookData = {
    googleId: book.id,
    title: book.volumeInfo.title,
    authors: (book.volumeInfo.authors) ? book.volumeInfo.authors : ['Unknown'],
    publishedDate: book.volumeInfo.publishedDate,
    description: book.volumeInfo.description,
    image: book.volumeInfo.imageLinks.thumbnail,
    link: book.volumeInfo.infoLink
  }

  return (
    <div className="searchResult">
      <img src={bookData.image} alt={bookData.title} />
      <a
        href={bookData.infoLink}
        rel="noopener noreferrer"
        target="_blank"
      >
        <h2>{bookData.title}</h2>
      </a>
      <h4>Date: {bookData.publishedDate}</h4>
      <h4>Author(s): {bookData.authors.join(", ")}</h4>
      <p>{bookData.description}</p>
      <div className="saveArticle" onClick={() => saveBook()}>
        Save
      </div>
    </div>
  );
};
export default SearchResult;
