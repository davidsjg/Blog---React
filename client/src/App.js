import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";
import { Home } from "./pages/Home/Home";
import { Nav } from "./pages/Nav/Nav";
import { StoreProvider } from "./utils/GlobalState";
import { Detail } from "./pages/Detail/Detail";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/detail" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
