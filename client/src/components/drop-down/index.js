import { memo } from 'react';
import { Dropdown } from 'react-bootstrap';

import './style.css';

const DropDown = (props) => {
  const { text, options = [], onItemClick } = props;

  return (
    <div className="drop-down">
      <Dropdown>
        <Dropdown.Toggle variant="primary">
          { text }
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {options.map(op => (
            <Dropdown.Item key={op} onClick={onItemClick}>{ op }</Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default memo(DropDown);
