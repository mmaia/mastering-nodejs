/**
 * Created by mmaia on 7/3/16.
 */
'use strict';

const
    dgram = require('dgram'),
    client = dgram.createSocket('udp4'),
    server = dgram.createSocket('udp4'),
    message = new Buffer(process.argv[2] || 'default message');

server
    .on('message', (msg) => {
        process.stdout.write('Got message: ' + msg + '\n');
        process.exit();
    })
    .bind(41234);

client.send(message, 0, message.length, 41234, 'localhost');

