import React, { ReactElement } from "react";
import TodoForm from "../components/Timer/TodoForm/TodoForm";
function HomePage(): ReactElement {
  return (
    <div className="allPage">
      <h2>Home page</h2>
      <div className="homePage__wrap">
        <div className="homePage__left">
          <TodoForm />
        </div>
        <div className="homePage__right">2</div>
      </div>
    </div>
  );
}
export default HomePage;
