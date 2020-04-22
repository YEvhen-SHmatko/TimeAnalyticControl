import React, { Component } from "react";
import Styles from "./TodoForm.module.css";
// import TodoLogo from "../TodoLogo/TodoLogo";
import Information from "../../Information/Information";
import { errorHandler } from "../../../services/constants";

const INITIAL_STATE = {
  name: "",
  error: {
    name: null,
  },
};
export default class TodoForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  id = Math.random();

  handleChange = (e: any) => {
    const { error } = this.state;
    this.setState({
      [e.target.name]: e.target.value,
      error: errorHandler(e.target, error),
    });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    const { name } = this.state;
    console.log(name, e);

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, error } = this.state;
    return (
      <section className={Styles.section__contact}>
        <form onSubmit={this.handleSubmit} className={Styles.form__contact}>
          {/* <TodoLogo /> */}
          <label className={Styles.form__title}>
            Name
            <span className={Styles.input__Wrap}>
              <input
                className={Styles.form__input}
                autoComplete="off"
                onChange={this.handleChange}
                value={name}
                name="name"
                type="text"
                placeholder="Input timer name"
              />
              {!!error.name && (
                <Information>Min length three symbol.</Information>
              )}
            </span>
          </label>

          <button type="submit" className={Styles.button}>
            <i className="material-icons">add_circle_outline</i>
          </button>
        </form>
      </section>
    );
  }
}
