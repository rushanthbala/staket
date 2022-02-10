import React from "react";
import { publicRoutes } from "../route/route";
import { Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  const publicRoute = (route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        component={route.component}
        exact={route.exact}
      />
    );
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          {publicRoutes.map((route, index) => publicRoute(route, index))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
