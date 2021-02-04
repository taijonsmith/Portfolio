import React, { useEffect } from 'react';
import './css/dialog_box.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import { close_dialog } from '../redux/actions/dialog_actions';
import { login_user } from '../redux/actions/user_actions';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox() {
  const dialog = useSelector(state => state.dialog);
  const dispatch = useDispatch();
  const [title, setTitle] = React.useState(dialog.title);
  const [content, setContent] = React.useState(dialog.content);
  const users = [{user_id: 1, email: 'user@gmail.com'}];
  

  const handleClose = () => {
    dispatch(close_dialog());
  };

  const handleListItemClick = (user) => {
    if (user !== 'add_account') {
      dispatch(login_user(user));
    }
    dispatch(close_dialog());
  };

  const login_content = 
    <List>
      {users.map((user, i) => (
        <ListItem button onClick={() => handleListItemClick(user)} key={i}>
          <ListItemAvatar>
            <Avatar className="avatar">
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.email} />
        </ListItem>
      ))}

      <ListItem autoFocus button onClick={() => handleListItemClick('add_account')}>
        <ListItemAvatar>
          <Avatar className="avatar">
            <AddIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Add Account" />
      </ListItem>
    </List>;

  useEffect(() => {
    if (dialog.type === 'login') {
      setTitle('Accounts');
      setContent(login_content);
    }
    else if (dialog.type === 'general') {
      setTitle(dialog.title);
      setContent(<DialogContentText id="dialog_description">{dialog.content}</DialogContentText>);
    }
  }, [dialog]);

  return (
      <Dialog
        id="dialog_box"
        open={dialog.opened}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="dialog_title"
        aria-describedby="dialog_description"
      >
        <DialogTitle id="dialog_title">{title}</DialogTitle>
        <DialogContent dividers>
            {content}
        </DialogContent>
        <DialogActions>
          <Button id="close_button" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}