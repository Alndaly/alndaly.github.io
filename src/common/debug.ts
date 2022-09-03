import debug from 'debug';

if (process.env.NODE_ENV !== 'production') {
  try {
    window.localStorage.debug = '*:*';
  } catch {
    // nothing
  }
}

const req = debug('req:>');
const res = debug('res:>');
const error = debug('error:>');
const log = debug('log:>');

export default {
  req,
  res,
  error,
  log,
};
