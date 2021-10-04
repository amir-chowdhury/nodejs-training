import logger from 'loglevel'
import { env } from 'process'
import { startServer } from './start'
import './config/config'

const isTest = env.NODE_ENV === 'test'
const logLevel = (env.LOG_LEVEL !== undefined)
  ? (env.LOG_LEVEL as logger.LogLevelDesc)
  : (isTest ? 'warn' : 'info')

logger.setLevel(logLevel)

startServer()
