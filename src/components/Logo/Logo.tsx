import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

export default function Logo(): ReactElement {
  return (
    <div className="header__logo-wrap">
      <i className="fas fa-compass header__logo-icon" aria-hidden="true" />
      <NavLink className="header__logo-text" to={routes.HomePage.path}>
        Time Analytic Control
      </NavLink>
    </div>
  );
}
