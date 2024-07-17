import React from 'react';
import { useDrop } from 'react-dnd';
import TaskCard from './TaskCard';
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/slices/tasksSlice';

const Column = ({ stage, tasks }) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      dispatch(moveTask({ taskId: item.id, newStage: stage }));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`column ${isOver ? 'over' : ''}`}>
      <h2>{stage}</h2>
      {tasks.map(task => <TaskCard key={task.id} task={task} />)}
    </div>
  );
};

export default Column;
