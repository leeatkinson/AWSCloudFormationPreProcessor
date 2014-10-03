#!/usr/bin/env node

"use strict";

var path = require("path");
var fs = require("fs");

var commander = require("commander");

var libPath = path.join(path.dirname(fs.realpathSync(__filename)), "../lib/main.js");
var lib = require(libPath);

var packageJson = require("../package.json");

commander.description("CloudFormation Pre-Processor").version(packageJson.version)
	.usage("[options] <template-path-pattern> ...")
	.option("-r, --region [region]", "AWS region [eu-west-1]", "eu-west-1")
	.parse(process.argv);

console.log(commander.description() + " " + commander.version());

lib(commander.region, commander.args, function(error) {
	console.log("Done!");
});