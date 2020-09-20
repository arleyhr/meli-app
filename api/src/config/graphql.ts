import path from 'path';

import { ApolloServer } from 'apollo-server-express';
import { Express } from 'express';
import { buildSchema } from 'type-graphql';

import {
  ItemDetailResolver,
  ItemsResolver,
} from '../graphql/resolvers/items-resolver';
import { SiteResolver } from '../graphql/resolvers/sites-resolver';

/**
 * apply middleware
 */
async function setupGraphQL(app: Express): Promise<void> {
  /**
   * Build schema
   */

  const schema = await buildSchema({
    resolvers: [SiteResolver, ItemsResolver, ItemDetailResolver],
    emitSchemaFile: path.resolve(__dirname, '..', 'graphql', 'schema.gql'),
  });

  /**
   * Create apollo server
   */
  const gqlServer = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
  });

  gqlServer.applyMiddleware({ app, path: '/graphql' });
}

export { setupGraphQL };
