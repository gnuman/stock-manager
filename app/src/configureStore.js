import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { connectRoutes } from "redux-first-router";
import { getApolloClient } from "./apolloClient";
import thunk from "redux-thunk";
import routesMap from "./routesMap";
import options from "./options";
import authReducer from "./reducers/auth";
import * as reducers from "./reducers";
import * as actionCreators from "./actions";
import { Map } from "immutable";

export default (history, preLoadedState) => {
  const { reducer, middleware, enhancer } = connectRoutes(
    history,
    routesMap,
    options
  );

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  console.log("preloadedstate ", preLoadedState);
  const middlewares = applyMiddleware(thunk, middleware);
  const enhancers = composeEnhancers(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);

  if (module.hot && process.env.NODE_ENV === "development") {
    module.hot.accept("./reducers/index", () => {
      const reducers = require("./reducers/index");
      const rootReducer = combineReducers({ ...reducers, location: reducer });
      store.replaceReducer(rootReducer);
    });
  }
  const graphQlClient = getApolloClient(store);
  return { store, thunk, graphQlClient };
};

const composeEnhancers = (...args) =>
  typeof window !== "undefined"
    ? composeWithDevTools({ actionCreators })(...args)
    : compose(...args);
