import React from 'react';
import Board from './components/Board';
import SearchBar from './components/SearchBar';
import AddTaskButton from './components/AddTaskButton';
import './styles.css';

const App = () => {
  return (
    <div className="app">
      <h1>Kanban Board</h1>
      <SearchBar />
      <Board />
      <AddTaskButton />
    </div>
  );
};

export default App;
