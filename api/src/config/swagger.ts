import { Express } from 'express';

const expressJSDocSwagger = require('express-jsdoc-swagger');

export function setupSwagger(app: Express): void {
  const options = {
    info: {
      version: '1.0.0',
      title: 'Mercado Libre API',
    },
    filesPattern: '../**/*.js',
    swaggerUIPath: '/docs',
    baseDir: __dirname,
  };

  expressJSDocSwagger(app)(options);
}
