import axios from 'axios'

export const G_API = {
  searchBooks: (query, queryType, callback) => {
    const qType = `in${queryType}`
    const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${query}&${qType}=${query}&maxResults=40&key=${process.env.REACT_APP_G_BOOKS_KEY}`
    axios.get(queryUrl)
    .then((res) => {
      callback(res.data.items)
    })
  }
}