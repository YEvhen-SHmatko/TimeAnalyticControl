import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
const INIT_STATE = {
  formData: {
    name: "",
    email: "",
    password: "",
  },
  disableSabmit: true,
  errors: {
    name: {
      text: "",
      bool: null,
    },
    email: {
      text: "You have entered an invalid email address!",
      bool: null,
    },
    password: {
      text: "",
      bool: null,
    },
  },
};
export default class SignUpSection extends Component {
  state = {
    ...INIT_STATE,
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") this.validationEmail(value);
    if (name === "name") this.validationEmpty(name, value);
    if (name === "password") this.validationEmpty(name, value);
    this.disableSabmit();
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };
  validationEmpty = (key, value) => {
    const bool = value.length > 0 ? false : true;
    const { errors } = this.state;
    this.setState({ errors: { ...errors, [key]: { ...errors[key], bool } } });
  };
  validationEmail = (email) => {
    // eslint-disable-next-line no-useless-escape
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const bool = email.match(mailformat) ? false : true;
    const { errors } = this.state;
    this.setState({ errors: { ...errors, email: { ...errors.email, bool } } });
  };
  disableSabmit = () => {
    const { errors } = this.state;
    const disabled =
      Object.keys(errors).filter(
        (key) => errors[key].bool || errors[key].bool === null
      ).length > 0;
    this.setState({ disableSabmit: disabled });
  };
  handleSubmit = (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              name="name"
              value={this.state.formData.name}
              onChange={this.handleChange}
              label="Name"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              value={this.state.formData.email}
              onChange={this.handleChange}
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              type="password"
              required
              fullWidth
              id="password"
              label="Password"
              value={this.state.formData.password}
              onChange={this.handleChange}
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <Grid item xs={12} md={6}>
                <Button
                  disabled={this.state.disableSabmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/auth/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}
