import logger from 'loglevel'
import { startServer } from './start';
import './config/config';

const isTest = process.env.NODE_ENV === 'test'
// const logLevel = process.env.LOG_LEVEL || (isTest ? 'warn' : 'info')
const logLevel = (isTest ? 'warn' : 'info');

logger.setLevel(logLevel);

startServer();
