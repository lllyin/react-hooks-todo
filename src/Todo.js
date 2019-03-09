import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 580,
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto',
  },
  input: {
    minWidth: 210,
  },
});

function Todo({ classes }) {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        if (!text) return;
        setTodos([...todos, { id: todos.length, isCompelte: false, isRemoved: false, content: text }]);
        setText('');
      }}
    >
      <TextField
        className={classes.input}
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />

      <List className={classes.root}>
        {todos.map(
          todo =>
            !todo.isRemoved && (
              <ListItem key={todo.id} button>
                <Checkbox
                  disableRipple
                  tabIndex={-1}
                  onChange={e => {
                    const newTodos = todos.map(t => {
                      if (t.id === todo.id) {
                        t.isCompelte = e.currentTarget.checked;
                      }
                      return t;
                    });
                    setTodos(newTodos);
                  }}
                />
                <ListItemText primary={todo.content} />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => {
                      const newTodos = todos.map(t => {
                        if (t.id === todo.id) {
                          t.isRemoved = true;
                        }
                        return t;
                      });
                      setTodos(newTodos);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ),
        )}
      </List>
    </form>
  );
}

export default withStyles(styles)(Todo);
