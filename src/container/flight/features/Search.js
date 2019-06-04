import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { flightActions } from 'store/actions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  onChange = e => {
    const value = e.target.value;

  };
  render() {
    return (
      <Fragment>
        <TextField
          id="outlined-name"
          label="Search"
          value={this.state.value}
          fullWidth
          onChange={e => this.onChange(e)}
          margin="normal"
          variant="outlined"
        />
      </Fragment>
    );
  }
}

List.propTypes = {
  search: PropTypes.func
};

const mapStateToProps = state => {
  return {
    cheap: state.Flight.cheap.payload.data,
    cheapLoading: state.Flight.cheap.loading,
    business: state.Flight.business.payload.data,
    businessLoading: state.Flight.business.loading
  };
};

const mapDispatchToProps = {
  search: flightActions.search
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
