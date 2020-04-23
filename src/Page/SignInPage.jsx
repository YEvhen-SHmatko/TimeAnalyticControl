import React from "react";
import PropTypes from "prop-types";

import SignInSection from "../components/SignInSection/SignInSection";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minHeight: "99vh",
    maxHeight: "100vh",
  },
}));

const SignInPage = ({ history, location, match }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignInSection history={history} location={location} match={history} />
    </div>
  );
};
SignInPage.propstypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default SignInPage;
