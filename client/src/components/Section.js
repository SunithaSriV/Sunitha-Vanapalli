import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ children, id, ...props }) => (
  <div id={id} {...props}>
    {children}
  </div>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default Section;
