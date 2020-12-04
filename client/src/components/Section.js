import React from 'react';

const Section = ({ children, id, ...props }) => (
  <div id={id} {...props}>
    {children}
  </div>
);

export default Section;
