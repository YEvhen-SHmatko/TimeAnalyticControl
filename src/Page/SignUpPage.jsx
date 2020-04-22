import React from "react";
import SignUpSection from "../components/SignUpSection/SignUpSection";
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

const SignUpPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SignUpSection />
    </div>
  );
};
export default SignUpPage;
