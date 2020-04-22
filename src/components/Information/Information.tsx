import React from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import Styles from "./Information.module.css";
import pop from "../../transition/pop.module.css";

interface Props {
  children: any;
}

const Information = ({ children }: Props) => {
  return (
    <CSSTransition in timeout={250} unmountOnExit classNames={pop}>
      <div className={Styles.line}>
        <span className={Styles.error}>{children}</span>
      </div>
    </CSSTransition>
  );
};
Information.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Information;
