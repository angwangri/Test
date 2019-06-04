import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import CheapForm from './features/CheapForm';
import BusinessForm from './features/BusinessForm';
import { flightActions } from 'store/actions';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
  }
  handleChange = (e, value) => {
    this.setState({
      tab: value
    });
  };
  render() {
    const { t } = this.props;
    return (
      <div style={{ padding: '20px' }}>
        <AppBar position="static">
          <Tabs value={this.state.tab} onChange={(e, value) => this.handleChange(e, value)}>
            <Tab value={0} label={t('Cheap Flight')} />
            <Tab value={1} label={t('Business Flight')} />
          </Tabs>
        </AppBar>
        {this.state.tab === 0 && <CheapForm onClick={this.props.addFlight} />}
        {this.state.tab === 1 && <BusinessForm onClick={this.props.addFlight} />}
      </div>
    );
  }
}

Create.propTypes = {
  t: PropTypes.func,
  addFlight: PropTypes.func
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  addFlight: flightActions.addFlight
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(Create));
