import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../redux/slices/tasksSlice';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      onChange={handleSearch}
      className="search-bar"
    />
  );
};

export default SearchBar;
