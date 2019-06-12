import React from "react";
import RadioButton from './RadioButton'
import './Form.css'

const SearchForm = ({
  inputValue,
  radioButtons,
  changeHandler,
  radioChangeHandler,
  selectedOption,
  submitSearch
}) => (
  <form className="searchForm">
    <div className="radioButtons">
      {radioButtons.map(radio => (
        <RadioButton
          className="radio"
          key={`radio-${radio}`}
          value={radio}
          selectedOption={selectedOption}
          handleChange={radioChangeHandler}
        />
      ))}
    </div>
    <div className="searchBar">
    <input
    className="searchInput"
    type="text"
    onChange={changeHandler}
    value={inputValue}
  />
  <button className="searchButton" onClick={submitSearch}>Search</button>
    </div>
    

    
  </form>
);

export default SearchForm;
