import React, {Component} from 'react'
import axios from 'axios'

class Saved extends Component {

  state = {
    saved: []
  }

  componentDidMount() {
    axios.get('/api').then(res => this.setState({ saved: res.data }))
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