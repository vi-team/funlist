import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.primary.light}`
  },
  button: {
    margin: theme.spacing.unit
  },
  completedItem: {
    backgroundColor: '#ccc',
    color: '#666'
  }
});

class FunListItem extends Component {
  state = {
    done: false
  };

  handleComplete = () => {
    this.setState({
      done: true
    });
  };

  render() {
    const fun = this.props.fun;
    if (!fun) {
      return null;
    }
    return (
      <ListItem
        className={{
          [this.props.classes.root]: true,
          [this.props.classes.completedItem]: this.state.done
        }}
      >
        <ListItemText primary={fun.id + ': ' + fun.name} />
        <ListItemSecondaryAction>
          {this.state.done ? null : (
            <Button
              mini
              variant="fab"
              color="primary"
              className={this.props.classes.button}
              onClick={this.handleComplete}
            >
              <CheckIcon />
            </Button>
          )}
          <Button
            mini
            variant="fab"
            color="secondary"
            className={this.props.classes.button}
            onClick={this.props.onDelete}
          >
            <DeleteIcon />
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default withStyles(styles)(FunListItem);
