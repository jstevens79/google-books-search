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

    <label style={{ display: "block", clear: "both" }}>
      Book Name
      <input
        className="searchInput"
        type="text"
        onChange={changeHandler}
        value={inputValue}
      />
    </label>

    <button onClick={submitSearch}>Search</button>
  </form>
);

export default SearchForm;
