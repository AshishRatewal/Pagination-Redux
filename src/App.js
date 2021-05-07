import React from "react";
import Header from "./Components/Header";
import PaginationComponent from './Components/PaginationComponent';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Edit from "./Components/Edit";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={PaginationComponent} />
          <Route path="/Edit" exact component={Edit} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
