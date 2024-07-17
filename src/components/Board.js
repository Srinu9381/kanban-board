import React from 'react';
import { useSelector } from 'react-redux';
import Column from './Column';

const stages = ['To Do', 'In Progress', 'Peer Review', 'Done'];

const Board = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const searchQuery = useSelector((state) => state.tasks.searchQuery.toLowerCase());

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="board">
      {stages.map(stage => (
        <Column
          key={stage}
          stage={stage}
          tasks={filteredTasks.filter(task => task.stage === stage)}
        />
      ))}
    </div>
  );
};

export default Board;
