/**
 * Created by mmaia on 7/2/16.
 */
'use strict';

const 
    Readable = require('stream').Readable, 
    fs = require('fs');

const readable = new Readable();

let count = 0;

readable._read = () => {
    if(++count > 10) {
        return readable.push(null);
    }
    setTimeout( () => readable.push(count + "\n"), 100);
};

//creates the file stream
const writeStream = fs.createWriteStream("./counter.txt" ,{
    flags: 'w',
    mode: '0666'
});

readable.pipe(writeStream);

readable.on('end', () => console.log('closing stream... no more data..'));
