import React from 'react'

const RadioButton = ({
  value,
  selectedOption,
  handleChange
}) => {
  return <label className={(value === selectedOption) ? 'active' : ''}>
    <input
      type="radio"
      value={value}
      checked={value === selectedOption}
      onChange={handleChange}
    />
    {value}
  </label>
}

export default RadioButton