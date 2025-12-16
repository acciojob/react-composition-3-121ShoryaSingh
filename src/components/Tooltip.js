import React, { useState } from 'react';

const Tooltip = ({ children, text }) => {
  const [isVisible, setIsVisible] = useState(false);

  const childWithTooltip = React.cloneElement(children, {
    className: 'tooltip',
    onMouseEnter: () => setIsVisible(true),
    onMouseLeave: () => setIsVisible(false),
    children: (
      <>
        {children.props.children}
        {isVisible && <div className="tooltiptext">{text}</div>}
      </>
    ),
  });

  return childWithTooltip;
};

export default Tooltip;
