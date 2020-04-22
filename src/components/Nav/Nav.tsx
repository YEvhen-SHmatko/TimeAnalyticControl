import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes/routes";

interface Props {}

export default function Nav({}: Props): ReactElement {
  return (
    <ul className="header__menu-list">
      <li className="header__menu-item">
        <NavLink
          exact
          activeClassName="header__link-active"
          className="header__menu-link"
          to={routes.HomePage.path}
        >
          {routes.HomePage.lable}
        </NavLink>
      </li>
      <li className="header__menu-item">
        <NavLink
          activeClassName="header__link-active"
          className="header__menu-link"
          to={routes.AboutPage.path}
        >
          {routes.AboutPage.lable}
        </NavLink>
      </li>
      <li className="header__menu-item">
        <NavLink
          activeClassName="header__link-active"
          className="header__menu-link"
          to={routes.LoginPage.path}
        >
          {routes.LoginPage.lable}
        </NavLink>
      </li>
      <li className="header__menu-item">
        <NavLink
          activeClassName="header__link-active"
          className="header__menu-link"
          to={routes.CreatePage.path}
        >
          {routes.CreatePage.lable}
        </NavLink>
      </li>
    </ul>
  );
}
