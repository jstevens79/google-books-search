import React, {Component} from 'react'
import {DB_API} from '../Utils'

class Saved extends Component {

  state = {
    saved: []
  }
  
  setSavedBooks = books => {
    this.setState({ saved: books })
  }

  componentDidMount() {
    DB_API.getSavedBooks(this.setSavedBooks)
  }

  render() {
    return (
      <div>
        {this.state.saved.map(book => (
          <h1 key={book._id}>{book.title}</h1>
        ))}
      </div>
    )
  }

}

export default Saved