// config.js
if(env === 'development') {
    process.env.BASE_URL = 'localhost-dev:3000';
} else if (env === 'test') {
    process.env.BASE_URL = 'localhost-test:3000';
} else {
    process.env.BASE_URL = 'prod-environment:8080'
}