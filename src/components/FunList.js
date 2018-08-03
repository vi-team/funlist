import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText
} from '@material-ui/core';
import _ from 'lodash';
import FunListItem from './FunListItem';

const styles = theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2
  },
  newFunName: ''
});

class FunList extends Component {
  state = {
    funs: [
      { id: 1, name: 'fun1' },
      { id: 2, name: 'fun2' },
      { id: 3, name: 'fun3' },
      { id: 4, name: 'fun4' },
      { id: 5, name: 'fun5' }
    ],
    creationDialogOpen: false
  };

  deleteFun = id => {
    this.setState(prevState => {
      return {
        funs: _.filter(prevState.funs, fun => fun.id !== id)
      };
    });
  };

  openCreationDialog = () => {
    this.setState({ creationDialogOpen: true });
  };

  closeCreationDialog = () => {
    this.setState({ creationDialogOpen: false });
  };

  handleCreation = () => {
    const newFunName = this.state.newFunName;
    if (!_.isEmpty(newFunName)) {
      this.setState(prevState => {
        const funs = prevState.funs;
        funs.push({
          id: _.maxBy(funs, 'id').id + 1,
          name: newFunName
        });
        return {
          funs: funs,
          creationDialogOpen: false,
          newFunName: ''
        };
      });
    }
  };

  handleTextFieldChange = field => event => {
    this.setState({
      [field]: event.target.value
    });
  };

  render() {
    const items = this.state.funs.map(item => (
      <FunListItem
        key={item.id}
        fun={item}
        onDelete={e => this.deleteFun(item.id)}
      />
    ));
    return (
      <section>
        <List component="nav">{items}</List>
        <Button
          variant="fab"
          color="primary"
          className={this.props.classes.fab}
          onClick={this.openCreationDialog}
        >
          <AddIcon />
        </Button>
        <Dialog
          open={this.state.creationDialogOpen}
          onClose={this.closeCreationDialog}
        >
          <DialogTitle>Add a new Fun</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a Fun name to continue
            </DialogContentText>
            <TextField
              autoFocus
              fullWidth
              id="name"
              label="Name"
              value={this.state.newFunName}
              onChange={this.handleTextFieldChange('newFunName')}
            />
          </DialogContent>
          <DialogActions>
            <Button color="primary" onClick={this.closeCreationDialog}>
              Cancel
            </Button>
            <Button color="primary" onClick={this.handleCreation}>
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </section>
    );
  }
}

export default withStyles(styles)(FunList);
