import ApolloClient from "apollo-client";
import { ReduxCache } from "apollo-cache-redux";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";

const GRAPHQL_URI = "http://localhost:3000/graphql";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    // eslint-disable-next-line no-console
    console.error(`[Network error]: ${networkError} ${GRAPHQL_URI}`);
  }
});

export const dataIdFromObject = object => `${object.__typename}:${object.id}`;

export const getApolloClient = store =>
  new ApolloClient({
    link: ApolloLink.from([errorLink, new HttpLink({ uri: GRAPHQL_URI })]),
    cache: new ReduxCache({
      store,
      dataIdFromObject
    })
  });
