import { memo } from 'react';
import { Table } from 'react-bootstrap';

const TableBody = ({ category = [], data = [] }) => {
  return (
    <div>
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
