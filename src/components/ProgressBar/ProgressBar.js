import { useState, useEffect } from 'react';
import './ProgressBar.css';

const ProgressBar = ({ width, percent }) => {

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue((percent * width)/100);
  }, [percent, width]);

  return (
    <div>
      <div className="progress-div" style={{ width: `${width}%` }}>
        <div style={{ width: `${value}%` }} className="progress-status" />
      </div>
    </div>
  );
};

export default ProgressBar;
