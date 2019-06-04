import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loading, DefaultTable } from 'components/common';
import SearchForm from './features/Search';
import PropTypes from 'prop-types';
import Layout from 'container/layout';
import { flightActions } from 'store/actions';
import Create from './Create';
import { Typography, Dialog, Button } from '@material-ui/core';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cheapHead: ['route', 'departure', 'arrival'],
      businessHead: ['departure', 'arrival', 'departureTime', 'arrivalTime'],
      createForm: false
    };
  }
  componentDidMount() {
    this.props.getCheap();
    this.props.getBusiness();
  }
  handleForm = value => {
    this.setState({
      createForm: value
    });
  };
  render() {
    return (
      <Layout>
        <Button variant="contained" color="primary" onClick={() => this.handleForm(true)}>
          Create
        </Button>
        <Dialog
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.createForm}
          onClose={() => this.handleForm(false)}
        >
          <Create />
        </Dialog>
        <SearchForm />
        <Typography variant="h3" component="h3" gutterBottom>
          Cheap flight
        </Typography>
        {this.props.cheapLoading ? (
          <Loading />
        ) : (
          <DefaultTable columns={this.state.cheapHead} datas={this.props.cheap} />
        )}
        <Typography variant="h3" component="h3" gutterBottom>
          Business flight
        </Typography>
        {this.props.businessLoading ? (
          <Loading />
        ) : (
          <DefaultTable columns={this.state.businessHead} datas={this.props.business} />
        )}
      </Layout>
    );
  }
}

List.propTypes = {
  getCheap: PropTypes.func,
  getBusiness: PropTypes.func,
  cheapLoading: PropTypes.bool,
  businessLoading: PropTypes.bool,
  cheap: PropTypes.array,
  business: PropTypes.array
};

const mapStateToProps = state => {
  return {
    cheap: state.Flight.cheap.payload,
    cheapLoading: state.Flight.cheap.loading,
    business: state.Flight.business.payload,
    businessLoading: state.Flight.business.loading
  };
};

const mapDispatchToProps = {
  getCheap: flightActions.getCheap,
  getBusiness: flightActions.getBusiness
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
