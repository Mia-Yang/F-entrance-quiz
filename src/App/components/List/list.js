import React, { Component } from 'react';
import './list.scss';

class List extends Component {
  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <input type="text" placeholder={"+添加学员"}/>
      </div>
    );
  }
}

export default List;