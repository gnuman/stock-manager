import 'babel-polyfill';
import express from 'express';
import webpack from 'webpack';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import cors from 'cors';
import makeConfig from './webpack.config.babel';

const app = express();
const compiler = webpack([makeConfig('development')]);

app.use(cors());
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotServerMiddleware(compiler));

app.listen(3000);
