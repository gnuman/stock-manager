require('babel-polyfill');
const handler = require('./dist/main.js').default;

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(handler());
app.listen(3000);
