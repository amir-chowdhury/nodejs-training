if (process.env.NODE_ENV === 'production') {
  require('./dist')
} else {
  /* eslint-disable @typescript-eslint/no-var-requires */
  require('nodemon')({ script: 'src/' })
}
