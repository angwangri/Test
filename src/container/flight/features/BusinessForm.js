import React, { Component } from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params: {
        type: 1
      }
    };
  }
  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      params: {
        ...this.state.params,
        [name]: value
      }
    });
  };
  onSubmit = () => {
    this.props.onClick(this.state.params);
  };
  render() {
    return (
      <form noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              id="standard-uncontrolled"
              label="Departure"
              name="departure"
              fullWidth
              onChange={e => this.onChange(e)}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-uncontrolled"
              label="Arrival"
              name="arrival"
              fullWidth
              onChange={e => this.onChange(e)}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-uncontrolled"
              label="Departure Time"
              name="departureTime"
              fullWidth
              onChange={e => this.onChange(e)}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-uncontrolled"
              label="Arrival Time"
              name="arrivalTime"
              fullWidth
              onChange={e => this.onChange(e)}
              margin="normal"
            />
          </Grid>
        </Grid>
        <Button onClick={() => this.onSubmit()} variant="outlined">
          Create
        </Button>
      </form>
    );
  }
}
Form.propTypes = {
  onClick: PropTypes.func
};
export default Form;
