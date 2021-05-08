import React from "react";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import PaginationEntry from "./Components/PaginationEntry";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Pagination />
        <Switch>
          <Route path="/" exact component={PaginationEntry} />
        </Switch>
      </Router>
    </>
  );
};
export default App;
