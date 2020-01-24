import React from "react";
import {
  BrowserRouter as Router,
  Switch, // for server rendering
  Route
} from "react-router-dom";
// import SideBar from "./Components/SideBar";
import "./App.css";
import Character from "./Components/Character";
import ShowMore from "./Components/ShowMore";
import Location from "./Components/Location";
import Episodes from "./Components/Episodes";
import SideBar from './Components/SideBar'

function App() {
  return (
    <React.Fragment>
      <Router>
        <SideBar /> 
        <Switch>
          <Route exact path="/">
            <Character />
          </Route>
          {/* <Route path="/character/:id">
            <ShowMore />
          </Route> */}
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/episodes" component={Episodes} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
