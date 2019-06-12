import React from "react";
import BookContainer from "../components/BookContainer";

const Saved = ({ savedBooks, toggleBookSave }) => (
  <div>
    {savedBooks.map(book => (
      <BookContainer
        key={book._id}
        book={book}
        savedBooks={savedBooks}
        toggleBookSave={toggleBookSave}
      />
    ))}
  </div>
);

export default Saved;
