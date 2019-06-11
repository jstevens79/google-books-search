import React from "react";

const BookContainer = ({ book, toggleBookSave, savedBooks }) => {
  const Saved = savedBooks.find(s => s.googleId === book.googleId);
  const Send = Saved ? Saved : book;

  return (
    <div className="BookContainer">
      <div className="imageContainer">
        <img src={book.image} alt={book.title} />
      </div>
      <div className="bookDetails">
        <a href={book.link} rel="noopener noreferrer" target="_blank">
          <h2>{book.title}</h2>
        </a>

        <p>{book.description}</p>
        <button onClick={() => toggleBookSave(Send)}>
          {Saved ? "Delete" : "Add"}
        </button>
      </div>
    </div>
  );
};

export default BookContainer;
