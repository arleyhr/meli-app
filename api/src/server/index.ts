import cors from 'cors';
import express from 'express';
import { useExpressServer } from 'routing-controllers';

import { setupGraphQL } from '../config/graphql';
import { setupSwagger } from '../config/swagger';

import { AppController } from '../controllers/app.controller';
import { MeliController } from '../controllers/meli.controller';

/**
 * Create express app
 */
const app = express();

/**
 * Content type json middleware
 */
app.use(express.json());

/**
 * Cors middleware
 */
app.use(cors());

/**
 * Setup graphql
 */

setupGraphQL(app);

/**
 * Setup swagger docs
 */
setupSwagger(app);

/**
 * Config app controllers
 */
useExpressServer(app, {
  controllers: [AppController, MeliController],
});

export default app;
