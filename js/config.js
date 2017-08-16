#!/usr/bin/env node

var fs = require('fs');
var text = fs.readFileSync('../docs/team.txt').toString('utf-8');
var textByLine = text.split('\r\n');

var child_process = require('child_process');
var exec = child_process.exec;

for(i=0; i!=textByLine.length; i++)
{
    var command = 'rm ../img/team/';
    command += i + 1;
    command += '.jpg && cp ../img/';
    command += textByLine[i];
    command += '.jpg ../img/team/';
    command += i + 1;
    command += '.jpg';

    exec(command, function(err,stdout,stderr)
    {
        console.log(stdout);
    });
}