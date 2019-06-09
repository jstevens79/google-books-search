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

export const DB_API = {
  getSavedBooks: (callback) => {
    axios.get('/api')
      .then(res => callback(res.data))
      .catch(err => console.log(err))
  },

  getSavedBook: (id, callback) => {
    axios.get(`/api/${id}`)
      .then(res => callback(res.data))
      .catch(err => console.log(err))
  },

  saveBook: (callback) => {
    axios.post('/api')
      .then(res => callback(res.data))
      .catch(err => console.log(err))
  },

  deleteBook: (id, callback) => {
    axios.delete(`/api/${id}`)
      .then(res => callback())
      .catch(err => console.log(err))
  }

}