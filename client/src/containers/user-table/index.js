import React, { PureComponent }from 'react';
import axios from 'axios';

import { TableHeader, TableBody } from '../../components';
import { apiLinks, tableConstants } from '../../config';

const { userTable } = tableConstants;

class UserTable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get(apiLinks.fetchUsers)
      .then(({ data }) => {
        this.setState({ data: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        <TableHeader title={userTable.title} description={userTable.description} />
        <TableBody category={userTable.category} data={data} />
      </div>
    );
  }
}

export default UserTable;
