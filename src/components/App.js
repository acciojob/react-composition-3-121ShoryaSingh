import React from 'react';
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <h2 className="tooltip">
        <Tooltip text="This is a tooltip">
          <span>Hover Over Me</span>
        </Tooltip>
      </h2>
      <p className="tooltip">
        <Tooltip text="This is another tooltip">
          <span>Hover over me to see another tooltip</span>
        </Tooltip>
      </p>
    </div>
  );
};

export default App;
