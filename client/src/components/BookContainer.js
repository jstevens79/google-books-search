import React from "react";
import './BookContainer.css'

const BookContainer = ({ book, toggleBookSave, savedBooks }) => {
  const Saved = savedBooks.find(s => s.googleId === book.googleId);
  const Send = Saved ? Saved : book;

  return (
    <div className="bookContainer">
      <div className="imageContainer">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="bookDetails">
        <a href={book.link} rel="noopener noreferrer" target="_blank">
          <h2>{book.title}</h2>
        </a>
        <h3 className="authors">
          {book.authors.join(', ')}
        </h3>
        <span className="published">{book.publishedDate}</span>
        <p>{book.description}</p>
        <button className="addDelete" onClick={() => toggleBookSave(Send)}>
          {Saved ? "Delete" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default BookContainer;
