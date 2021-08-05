import { memo } from 'react';
import { Dropdown } from 'react-bootstrap';

const DropDown = (props) => {
  const { text, options = [], onItemClick } = props;

  return (
    <div>
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
