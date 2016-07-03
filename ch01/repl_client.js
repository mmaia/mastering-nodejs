/**
 * Created by mmaia on 7/3/16.
 */
'use strict';

const
    net = require('net'),
    sock = net.connect(8080);

process.stdin.pipe(sock);
sock.pipe(process.stdout);