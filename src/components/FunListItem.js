import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.primary.light}`
  }
});

class FunListItem extends Component {
  render() {
    const fun = this.props.fun;
    if (!fun) {
      return null;
    }
    return (
      <ListItem className={this.props.classes.root}>
        <ListItemText primary={this.props.fun.name} />
        <Button variant="extendedFab" onClick={this.props.onDelete}>
          <DeleteIcon />
          Delete
        </Button>
      </ListItem>
    );
  }
}

export default withStyles(styles)(FunListItem);
