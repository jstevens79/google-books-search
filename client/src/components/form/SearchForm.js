import React from "react";
import RadioButton from './RadioButton'

const SearchForm = ({
  inputValue,
  radioButtons,
  changeHandler,
  radioChangeHandler,
  selectedOption,
  submitSearch
}) => (
  <form>

    {radioButtons.map(radio => (
      <RadioButton
        key={`radio-${radio}`}
        value={radio}
        selectedOption={selectedOption}
        handleChange={radioChangeHandler}
      />
    ))}

    <label style={{ display: "block", clear: "both" }}>
      Book Name
      <input
        type="text"
        onChange={changeHandler}
        value={inputValue}
      />
    </label>

    <button onClick={submitSearch}>Search</button>
  </form>
);

export default SearchForm;
