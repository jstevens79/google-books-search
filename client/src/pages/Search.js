import React, {Component} from 'react'
import SearchForm from '../components/form/SearchForm'
import SearchResult from '../components/SearchResult'
import {G_API} from '../Utils'

class Search extends Component {

  state = {
    input: '',
    results: [],
    searched: false,
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
    this.setState({ results, searched: true })
  }

  submitSearch = event => {
    event.preventDefault();
    G_API.searchBooks(this.state.input, this.state.selectedOption, this.updateResults)
  }

  componentWillUnmount() {
    console.log('unmounted...')
  }

  render() {
    return (
      <div>
      <h1>Search</h1>
        <SearchForm
          inputValue={this.state.input}
          radioButtons={this.state.radioButtons}
          changeHandler={this.inputTextChangeHandler}
          radioChangeHandler={this.handleOptionChange}
          selectedOption={this.state.selectedOption}
          submitSearch={this.submitSearch}
        />
                    
        {this.state.results.map(result => (
          <SearchResult key={result.id} book={result} />
        ))}

      </div>
    )

  }


}

export default Search