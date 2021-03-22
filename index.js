const express = require('express');
const cors = require('cors');
const { handle404s, errorHandler } = require('./errorHandling');

const app = express();
app.use(cors());

// load our routes
const routes = require('./routes');
const router = routes(express.Router());
app.use(router);

// error handling must be the last
// middleware
app.use(handle404s);
app.use(errorHandler);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));