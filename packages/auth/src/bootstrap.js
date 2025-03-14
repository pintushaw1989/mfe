import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function to start up the app
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  // to run in isolation
  if (onNavigate) {
    // notify container of navigation update
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, el);

  return {
    onParentNavigate(location) {
      // new path name
      const nextPathname = location.pathname;

      // check the current path
      const { pathname } = history.location;

      if (pathname != nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// For running app locally or in development
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_auth-dev-root");

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// For production
export { mount };
