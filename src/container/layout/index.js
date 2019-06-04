import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// components: header

// actions

// components: First
const Layout = props => {
  return (
    <Fragment>
      <div>{props.children}</div>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
