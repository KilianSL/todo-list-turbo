import { List, Paper, Typography } from '@mui/material';
import { FC } from 'react';
import ToDoListItem from '../ToDoListItem';
const ToDoList: FC = () => {
  const items = ['List Item 1', 'List Item 2', 'List item 3'];

  return (
    <Paper sx={{ maxWidth: (theme) => theme.breakpoints.values.sm, width: '100%', alignSelf: 'center', p: 2 }}>
      <Typography variant="subtitle1">List Items ({items.length})</Typography>
      <List sx={{ width: '100%' }}>
        {items.map((item) => (
          <ToDoListItem title={item} key={item} />
        ))}
      </List>
    </Paper>
  );
};

export default ToDoList;
