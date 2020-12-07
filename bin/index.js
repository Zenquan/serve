#!/usr/bin/env node

/**
 * Module dependencies.
 */
const program = require('commander');
const {exec} = require('child_process');
const path = require('path');

/**
 * Config and import program
 */
const pkg = require('../package.json');
const argv = require('minimist')(process.argv.slice(2));

/**
 * --version, -V
 * -s static 
 * -p: port
 */

program
  .version(pkg.version)
  .usage('<command> [project-name]');

program
  .option('-s, --static')
  .action(async (value, cmd) => {
    console.log('>>>', argv['s']);
    if (argv['s']) {
      exec(`nodemon ${path.join(__dirname, '../index.js')}`)
    }
  })

// console.log('>>>', argv);
program.parse(process.argv);
if (program.debug) console.log(program.opts());