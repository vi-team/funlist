import React, { Component } from 'react';
import List from '@material-ui/core/List';
import _ from 'lodash';
import FunListItem from './FunListItem';

class FunList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      funs: [
        { id: 1, name: 'fun1' },
        { id: 2, name: 'fun2' },
        { id: 3, name: 'fun3' },
        { id: 4, name: 'fun4' },
        { id: 5, name: 'fun5' }
      ]
    };
  }
  deleteFun(id) {
    this.setState(prevState => {
      return {
        funs: _.filter(prevState.funs, fun => fun.id !== id)
      };
    });
  }

  render() {
    const items = this.state.funs.map(item => (
      <FunListItem
        key={item.id}
        fun={item}
        onDelete={this.deleteFun.bind(this, item.id)}
      />
    ));
    return <List component="nav">{items}</List>;
  }
}

export default FunList;
