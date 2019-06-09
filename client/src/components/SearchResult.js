import React from 'react'

const SearchResult = ({ book }) => (
  <div className="searchResult">
    <h2>{book.volumeInfo.title}</h2>
    <h3>Author(s): {book.volumeInfo.authors.join(', ')}</h3>
    <p>{book.volumeInfo.description}</p>
  </div>
)

export default SearchResult