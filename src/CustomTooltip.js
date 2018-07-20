import React from 'react';
import { Tooltip } from 'react-tippy';
import './tippy.css';

const CustomTooltip = () => (
  <Tooltip title="Welcome to React" position="bottom" trigger="click">
    <p>Click here to show popup</p>
  </Tooltip>
);

export default CustomTooltip;
