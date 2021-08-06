import { memo } from 'react';
import { Table } from 'react-bootstrap';

import './style.css';

const TableBody = ({ category = [], data = [] }) => {
  return (
    <div className="table-body">
      <Table>
        <thead>
          <tr>
            {category.map(cat => (
              <th key={cat}>{ cat }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => (
            <tr key={i}>
              {Object.values(obj).map(v => (
                <td key={v}>{ v }</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default memo(TableBody);
