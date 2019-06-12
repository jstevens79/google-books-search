import React from "react";
import RadioButton from "./RadioButton";
import "./Form.css";

const SearchForm = ({
  inputValue,
  radioButtons,
  changeHandler,
  radioChangeHandler,
  selectedOption,
  submitSearch
}) => {
  const Disabled = !inputValue.length ? true : false;
  return (
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
        <button disabled={Disabled} className={`searchButton ${(Disabled) ? 'disabled' : ''}`} onClick={submitSearch}>
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchForm;
