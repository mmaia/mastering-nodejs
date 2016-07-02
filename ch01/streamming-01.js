/**
 * Created by mmaia on 7/2/16.
 */
'use strict';

const Readable = require('stream').Readable;

const readable = new Readable();

let count = 0;

readable._read = () => {
    if(++count > 10) {
        return readable.push(null);
    }
    setTimeout( () => readable.push(count + "\n"), 500);
};

readable.pipe(process.stdout);

readable.on('end', () => console.log('closing stream... no more data..'));