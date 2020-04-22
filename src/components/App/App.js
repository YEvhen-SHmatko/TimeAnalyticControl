import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import SignUpPage from "../../Page/SignUpPage";
class App extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="sm">
        <SignUpPage />
      </Container>
    );
  }
}

export default App;
