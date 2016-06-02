#!/usr/bin/env node
"use strict";

var spawn = require('child_process').spawn;
var input = process.argv.slice(2); // ['.../node', '.../entr-bin/bin.js', ...]
var bin = require('./index');

spawn(bin.path, input, { stdio: 'inherit' }).on('exit', process.exit);

