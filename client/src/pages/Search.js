import React, {Component} from 'react'
import RadioButton from '../components/form/RadioButton'
import {G_API} from '../Utils'

class Search extends Component {

  state = {
    input: '',
    results: [],
    selectedOption: 'title',
    radioButtons: ['title', 'subject']
  }

  inputTextChangeHandler = event => {
    this.setState({ input: event.target.value})
  }

  handleOptionChange = event => {
    this.setState({ selectedOption: event.target.value})
  }

  updateResults = results => {
    this.setState({ results })
  }

  submitSearch = event => {
    event.preventDefault();
    G_API.searchBooks(this.state.input, this.state.selectedOption, this.updateResults)
  }

  render() {
    return (
      <div>
      <h1>Search</h1>
        <form>
          {this.state.radioButtons.map(radio => (
            <RadioButton
              key={`radio-${radio}`}
              value={radio}
              selectedOption={this.state.selectedOption}
              handleChange={this.handleOptionChange}
            />
          ))}
          <label style={{display: 'block', clear: 'both'}}>
            Book Name
            <input type="text" onChange={this.inputTextChangeHandler} value={this.state.input} />
          </label>
          
          <button onClick={this.submitSearch}>Search</button>

        </form>
          
        {this.state.results.map(result => (
          <h2 key={result.id}>{result.volumeInfo.title}</h2>
        ))}

      </div>
    )

  }


}

export default Search