/**
 * Created by mmaia on 7/3/16.
 */
'use strict';

const
    repl = require('repl'),
    net = require('net');

net.createServer((socket) => {
    repl
        .start({
            prompt: 'Server Prompt ->',
            input: socket,
            output: socket,
            terminal: true,
            useColors: true //,
            // eval: myFunc
        })
        .on('exit', () => socket.end());
    // function myFunc() {console.log(socket.input);}
}).listen(8080);