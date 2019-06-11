import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  NavLink,
  Route
} from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import { DB_API } from "./Utils";

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

  addBook = book => {
    DB_API.saveBook(book, this.getBooks);
  };

  deleteBook = id => {
    DB_API.deleteBook(id, this.getBooks);
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <NavLink to="/">Search</NavLink>
            <NavLink to="/saved">Saved</NavLink>
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Search
                  {...this.state}
                  deleteBook={this.deleteBook}
                  addBook={this.addBook}
                />
              )}
            />
            <Route
              exact
              path="/saved"
              render={props => (
                <Saved {...this.state} deleteBook={this.deleteBook} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
