import React, { Component }from 'react';
import axios from 'axios';

import { TableHeader, TableBody, DropDown } from '../../components';
import { apiLinks, tableConstants } from '../../config';

const { demoTable } = tableConstants;

class DemoTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      data: []
    };
  }

  componentDidMount() {
    axios.get(apiLinks.fetchItems)
      .then(({ data }) => {
        this.setState({ options: data });
      })
      .catch(err => console.log(err));
  }

  onItemClick = (e) => {
    const item = e.target.innerHTML || "";
    const params = { params: { item: item } };
    axios.get(apiLinks.fetchItemAgeCount, params)
      .then(({ data }) => {
        this.setState({ data: data });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { data, options } = this.state;

    return (
      <div>
        <TableHeader title={demoTable.title} description={demoTable.description} />
        <DropDown
          text="Item"
          options={options}
          onItemClick={this.onItemClick}
        />
        <TableBody category={demoTable.category} data={data} />
      </div>
    );
  }
}

export default DemoTable;
