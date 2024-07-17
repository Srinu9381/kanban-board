import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    searchQuery: '',
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    moveTask: (state, action) => {
      const { taskId, newStage } = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) task.stage = newStage;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addTask, moveTask, setSearchQuery } = tasksSlice.actions;
export default tasksSlice.reducer;
