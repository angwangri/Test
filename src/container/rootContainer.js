import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
// import style
import 'style/index.scss';
import Container from '@material-ui/core/Container';
import { Loading } from 'components/common';

const RootContainer = props => {
  return (
    <Container maxWidth="sm">
      <Suspense fallback={<Loading />}>{props.children}</Suspense>
    </Container>
  );
};
RootContainer.propTypes = {
  children: PropTypes.node
};
export default RootContainer;
