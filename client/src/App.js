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
      this.setState({ savedBooks: data }, () => {
        console.log(this.state.savedBooks)
      });
    };
    DB_API.getSavedBooks(setBooks);
  };

  componentDidMount() {
    this.getBooks();
  }

  toggleBookSave = (book) => {
    if (book._id) {
      DB_API.deleteBook(book._id, this.getBooks);
    } else {
      DB_API.saveBook(book, this.getBooks);
    }
  };

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
                <Search {...this.state} toggleBookSave={this.toggleBookSave} />
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
      </Router>
    );
  }
}

export default App;
