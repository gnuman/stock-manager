import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { compose } from 'compose-middleware';
import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './graphql/types.gql';
import { resolvers } from './graphql/resolvers';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default () =>
  compose([
    bodyParser.json(),
    (req, res, next) => {
      if (req.method === 'GET' && req.path === '/graphql') {
        return graphiqlExpress({ endpointURL: '/graphql' })(req, res, next);
      }
      return next();
    },
    (req, res, next) => {
      if (req.method === 'POST' && req.path === '/graphql') {
        return graphqlExpress({ schema })(req, res, next);
      }
      return next();
    },
  ]);
