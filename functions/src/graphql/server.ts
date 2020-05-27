import express from 'express';
import {ApolloServer} from 'apollo-server-express';

// @ts-ignore
import schema from './schema';
// @ts-ignore
import resolvers from './resolvers';

function gqlServer() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers,
    // Enable graphiql gui
    introspection: true,
    playground: true
  });

  apolloServer.applyMiddleware({app, path: '/', cors: true});

  return app;
}

export default gqlServer;
