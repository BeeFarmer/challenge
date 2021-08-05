import React, { Component }from 'react';
import { TableHeader, TableBody } from '../../components';

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.category = ['Username', 'Age'];
    this.state = {data: []};
  }

  componentDidMount() {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => {
        this.setState({data: data})
      })
  }

  render() {
    const { data } = this.state;
    console.log();
    return (
      <div>
        <TableHeader title="All Users" description="Users and their age" />
        <TableBody category={this.category} data={data} />
      </div>
    );
  }
}

export default UserTable;