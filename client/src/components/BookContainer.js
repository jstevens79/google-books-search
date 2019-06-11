import React from "react";

const BookContainer = ({ book, deleteBook, addBook }) => {
  let bData = {};

  if (!book._id) {
    bData = {
      googleId: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors ? book.volumeInfo.authors : ["Unknown"],
      publishedDate: book.volumeInfo.publishedDate,
      description: book.volumeInfo.description,
      image: book.volumeInfo.imageLinks.thumbnail,
      link: book.volumeInfo.infoLink
    };
  } else {
    bData = book;
  }

  return (
    <div className="BookContainer">
      <div className="imageContainer">
        <img src={bData.image} alt={bData.title} />
      </div>
      <div className="bookDetails">
        <a href={bData.link} rel="noopener noreferrer" target="_blank">
          <h2>{bData.title}</h2>
        </a>

        <p>{bData.description}</p>
        {bData._id ? (
          <button onClick={() => deleteBook(bData._id)}>Delete</button>
        ) : (
          <button onClick={() => addBook(bData)}>Add</button>
        )}
      </div>
    </div>
  );
};

export default BookContainer;
