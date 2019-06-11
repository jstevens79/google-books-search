import React, { Component } from "react";
import SearchForm from "../components/form/SearchForm";
import BookContainer from "../components/BookContainer";
import { G_API } from "../Utils";

class Search extends Component {
  state = {
    input: "",
    results: [],
    searched: false,
    selectedOption: "title",
    radioButtons: ["title", "subject"]
  };

  inputTextChangeHandler = event => {
    this.setState({ input: event.target.value });
  };

  handleOptionChange = event => {
    this.setState({ selectedOption: event.target.value });
  };

  updateResults = results => {
    const booksData = results.map((book, i) => {
      // see if this one is already saved
      const AlreadySaved = this.props.savedBooks.find(
        saved => saved.googleId === book.id
      );
      if (AlreadySaved) {
        return AlreadySaved;
      } else {
        const bData = {
          googleId: book.id,
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors
            ? book.volumeInfo.authors
            : ["Unknown"],
          publishedDate: book.volumeInfo.publishedDate,
          description: book.volumeInfo.description,
          image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : null,
          link: book.volumeInfo.infoLink
        };
        return bData;
      }
    });

    this.setState({ results: booksData, searched: true });
  };

  submitSearch = event => {
    event.preventDefault();
    G_API.searchBooks(
      this.state.input,
      this.state.selectedOption,
      this.updateResults
    );
  };

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
          <BookContainer
            key={result.googleId}
            savedBooks={this.props.savedBooks}
            book={result}
            toggleBookSave={this.props.toggleBookSave}
          />
        ))}
      </div>
    );
  }
}

export default Search;
