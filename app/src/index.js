import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import createHistory from "history/createBrowserHistory";
import AppContainer from "react-hot-loader/lib/AppContainer";
import App from "./components/App";
import configureStore from "./configureStore";
import { ApolloProvider } from "react-apollo";

const history = createHistory();
const { store, graphQlClient } = configureStore(history, window.REDUX_STATE);

const render = App => {
  const root = document.getElementById("root");

  ReactDOM.hydrate(
    <AppContainer>
      <Provider store={store}>
        <ApolloProvider client={graphQlClient}>
          <App />
        </ApolloProvider>
      </Provider>
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot && process.env.NODE_ENV === "development") {
  module.hot.accept("./components/App", () => {
    // eslint-disable-next-line
    const App = require("./components/App").default;

    render(App);
  });
}
