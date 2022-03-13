const session = require ('express-session');
const app = require('../app');

app.use (session({
    secret: 'PI',
    resave: false,
    saveUninitialized: true,
}))