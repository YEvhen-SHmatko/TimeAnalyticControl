import React, { Suspense, Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "../Nav/Nav";
import Finder from "../Finder/Finder";
import Logo from "../Logo/Logo";
import "./App.scss";
import routes from "../../routes/routes";
interface Props {}
interface State {
  isActiveMenu: boolean;
}

class App extends Component<Props, State> {
  state = {
    isActiveMenu: false,
  };
  handleIsActiveMenu = () => {
    const { isActiveMenu } = this.state;
    this.setState({ isActiveMenu: !isActiveMenu });
  };
  render() {
    const { isActiveMenu } = this.state;
    return (
      <>
        <header className="header">
          <div className="header__wrap">
            <Logo />

            <div className="header__menu-wrap">
              {isActiveMenu ? (
                <>
                  <button
                    className="header__menu-btn"
                    onClick={this.handleIsActiveMenu}
                  >
                    <i
                      className="fa fa-times header__menu-icon"
                      aria-hidden="true"
                    />
                  </button>
                  <nav className="header__menu-dropdown">
                    <Finder />
                    <Nav />
                  </nav>
                </>
              ) : (
                <button
                  className="header__menu-btn"
                  onClick={this.handleIsActiveMenu}
                >
                  <i
                    className="fa fa-bars header__menu-icon"
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </div>
        </header>
        <main>
          <Switch>
            <Route exact path={routes.HomePage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.HomePage.component />
              </Suspense>
            </Route>
            <Route path={routes.AboutPage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.AboutPage.component />
              </Suspense>
            </Route>
            <Route path={routes.LoginPage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.LoginPage.component />
              </Suspense>
            </Route>
            <Route path={routes.CreatePage.path}>
              <Suspense fallback={<div>Загрузка...</div>}>
                <routes.CreatePage.component />
              </Suspense>
            </Route>
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
