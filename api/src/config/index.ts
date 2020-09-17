const isProd = process.env.NODE_ENV === 'production';

const port: number = isProd ? 3000 : 9999;

export { isProd, port };
