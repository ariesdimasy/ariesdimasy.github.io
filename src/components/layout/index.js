import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Home from "./../../pages/home/";
import Portfolio from "../../pages/portfolio";

export default function layout() {
  return (
    <div class="container">
      <Sidebar></Sidebar>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
        </Switch>
      </Router>
    </div>
  );
}
