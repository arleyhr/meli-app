import dotEnv from 'dotenv';
import 'reflect-metadata';

import { port } from './config';

import app from './server';

/**
 * Config environment variables
 */
dotEnv.config();

/**
 * Listening!
 */
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
