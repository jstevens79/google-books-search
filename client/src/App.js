import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { DB_API } from "./Utils";
import "./reset.css";
import "./styles.css";

class App extends Component {
  state = {
    savedBooks: []
  };

  getBooks = () => {
    const setBooks = data => {
      this.setState({ savedBooks: data });
    };
    DB_API.getSavedBooks(setBooks);
  };

  toggleBookSave = book => {
    if (book._id) {
      DB_API.deleteBook(book._id, this.getBooks);
    } else {
      DB_API.saveBook(book, this.getBooks);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <div className="resultsContainer">
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Search
                    {...this.state}
                    toggleBookSave={this.toggleBookSave}
                  />
                )}
              />
              <Route
                exact
                path="/saved"
                render={props => (
                  <Saved {...this.state} toggleBookSave={this.toggleBookSave} />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
