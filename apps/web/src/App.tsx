import React from 'react';
import MenuAppBar from './components/MenuAppBar';
import { Stack } from '@mui/material';
import ToDoList from './components/ToDoList';

const App: React.FC = () => {
  return (
    <Stack gap={2}>
      <MenuAppBar />
      <ToDoList />
    </Stack>
  );
};

export default App;
