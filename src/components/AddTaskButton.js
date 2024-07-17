import React, { useState } from 'react';
import TaskForm from './TaskForm';

const AddTaskButton = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => setShowForm(!showForm);

  return (
    <>
      <button onClick={toggleForm} className="add-task-button">Add Task</button>
      {showForm && <TaskForm toggleForm={toggleForm} />}
    </>
  );
};

export default AddTaskButton;
