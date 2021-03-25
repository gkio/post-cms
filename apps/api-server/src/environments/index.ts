const DB_HOST_WITH_PORT = process.env.DB_HOST_WITH_PORT || 'mongodb://localhost:27017';
const DB_DATABASE = process.env.DB_DATABASE || 'blog-post'
const DB_URL = process.env.DB_URL || `${DB_HOST_WITH_PORT}/${DB_DATABASE}`;

const NODE_ENV = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 3001
const DOMAIN = process.env.DOMAIN || 'localhost'
const RATE_LIMIT_MAX = process.env.RATE_LIMIT_MAX || 10

// typeorm
const enviroment = {
  development: {
    url: DB_URL
  },
  production: {
    url: DB_URL
  }
}

const TYPEORM = enviroment[NODE_ENV]; 

export { 
  TYPEORM,
  DB_DATABASE,
  DB_URL,
  NODE_ENV,
  PORT,
  DOMAIN,
  RATE_LIMIT_MAX,
}