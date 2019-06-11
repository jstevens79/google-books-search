import React from "react";
import BookContainer from '../components/BookContainer'

const Saved = ({ savedBooks, deleteBook}) => (
  <div>
    {savedBooks.map(book => (
      <BookContainer
        key={book._id}
        book={book}
        deleteBook={deleteBook}
      />
    ))}
  </div>
)

export default Saved;
