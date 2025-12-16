import React from 'react';
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <p className="tooltip">Hover Over Me</p>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <p className="tooltip">Hover over me to see another tooltip</p>
      </Tooltip>
    </div>
  );
};

export default App;
