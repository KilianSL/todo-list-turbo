import { Checkbox, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
interface IToDoListItemProps {
  title: string;
}

const ToDoListItem: FC<IToDoListItemProps> = ({ title }) => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxToggled = (_: React.ChangeEvent<HTMLInputElement>, checked: boolean) => setChecked(checked);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments">
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton dense>
        <ListItemIcon>
          <Checkbox edge="start" tabIndex={-1} disableRipple checked={checked} onChange={handleCheckboxToggled} />
        </ListItemIcon>
        <ListItemText primary={title} sx={{ textDecoration: checked ? 'line-through' : undefined }} />
      </ListItemButton>
    </ListItem>
  );
};

export default ToDoListItem;
