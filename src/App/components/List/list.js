import React, { Component } from 'react';
import './list.scss';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/list', { method: 'GET'})
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({students: data})
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <div className='list'>
          {this.state.students.map((person) => 
          <div className='personCard' key={person.id}>
            {person.id}.{person.name}
          </div>
          )}
        </div>
        <input type="text" placeholder="+添加学员"/>
      </div>
    );
  }
}

export default List;