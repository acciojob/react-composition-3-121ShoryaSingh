import React from 'react';
import './../styles/App.css';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div>
      <Tooltip text="This is a tooltip">
        <div className="hover-text">Hover Over Me</div>
      </Tooltip>
      <Tooltip text="This is another tooltip">
        <div className="hover-text">Hover over me to see another tooltip</div>
      </Tooltip>
    </div>
  );
};

export default App;
