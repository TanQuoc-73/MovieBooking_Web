import { registerAs } from '@nestjs/config';

// import dotenv from 'dotenv';
// dotenv.config();

export default registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT ?? '5000', 10),
  apiPrefix: process.env.API_PREFIX || 'api',
}));
