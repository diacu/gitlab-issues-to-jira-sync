var config = require('./lib/config.js')
var syncer = require('./lib/syncer.js');

config.load(process.argv[2], syncer.process);
