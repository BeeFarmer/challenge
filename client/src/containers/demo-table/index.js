import React, { Component }from 'react';
import { TableHeader, TableBody, DropDown } from '../../components';

class DemoTable extends Component {
  constructor(props) {
    super(props);
    this.category = ['Age', 'Count'];
    this.options = ['apple', 'bana', 'chocolate'];
    this.state = {
      
    };
  }

  onItemClick = (e) => {
    const item = e.target.innerHTML || "";
    console.log(item);
    // 1. add fetch getListOfAgesOfUsersWith
    // 2. styles
  }

  render() {

    return (
      <div>
        <TableHeader title="Age Demographic of Users With ___" />
        <DropDown
          text="Item"
          options={this.options}
          onItemClick={this.onItemClick}
        />
        <TableBody category={this.category} />
      </div>
    );
  }
}

export default DemoTable;