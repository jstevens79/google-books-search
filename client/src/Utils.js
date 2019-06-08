import axios from 'axios'

export const G_API = {
  searchBooks: (param) => {
    const queryUrl = `https://www.googleapis.com/books/v1/volumes?q=${param}&maxResults=40&key=${process.env.REACT_APP_G_BOOKS_KEY}`
    axios.get(queryUrl)
    .then((res) => {
      console.log(res.data)
    })
  }
}