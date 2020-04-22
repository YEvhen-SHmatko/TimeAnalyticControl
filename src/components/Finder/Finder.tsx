import React, { Component } from "react";

interface Props {}
interface State {}

export default class Finder extends Component<Props, State> {
  state = {};

  render() {
    return (
      <form action="#" className="header__menu-form">
        <input
          className="header__menu-input"
          type="text"
          placeholder="search"
        />
      </form>
    );
  }
}
