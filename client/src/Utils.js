import axios from 'axios'

export const G_API = {
  searchBooks: (query, queryType, callback) => {
    const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${query}&maxResults=40&key=${process.env.REACT_APP_G_BOOKS_KEY}`
    console.log(queryUrl)
    axios.get(queryUrl)
    .then((res) => {
      const response = (res.data.items) ? res.data.items : []
      callback(response)
    })
  }
}