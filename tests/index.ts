// This will search for files ending in .tests.js and require them
// so that they are added to the webpack bundle
var context = require['context']('../src', true, /.+\.test\.ts$/);
context.keys().forEach(context);
module.exports = context;
