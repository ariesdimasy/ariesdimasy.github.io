import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./Sidebar";
import Home from "./../../pages/home/";
import Portfolio from "../../pages/portfolio";
import Experience from "../../pages/experience";

export default function layout() {
  return (
    <div class="container">
      <Sidebar></Sidebar>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/portfolio" component={Portfolio}></Route>
          <Route path="/experience" component={Experience}></Route>
        </Switch>
      </Router>
    </div>
  );
}
