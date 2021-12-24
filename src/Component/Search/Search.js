import { useState } from 'react';

function Search() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return <input type="text" onChange={handleChange} title="dummySearch" />;
}

export default Search;
