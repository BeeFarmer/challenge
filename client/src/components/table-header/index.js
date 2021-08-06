import { memo } from 'react';

import './style.css';

const TableHeader = ({ title, description }) => {
  return (
    <div className="table-header">
      <h2>{ title }</h2>
      {description && <span className="table-desc">{ description }</span>}
    </div>
  );
}

export default memo(TableHeader);
