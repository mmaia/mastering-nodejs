/**
 * Created by mmaia on 7/1/16.
 */
'use strict';

const EventEmitter = require('events').EventEmitter;

/**
 * this function will be used as a constructor to the Counter objects
 * @param init - the initial value to start counting from
 * @constructor
 */
const Counter = function(init){
    this.increment = function () {
        init++;
        this.emit('incremented', init);
    }
};

// prototypes adding EventEmitter to be able to listen to events
Counter.prototype = new EventEmitter();

// creates the object
const counter = new Counter(10);

//creates the callback to print the current count value
const callback = function(count){
    console.log(count);
};

// adds the listener to react to 'incremented' events emitted.
counter.addListener('incremented', callback);

//increments 2 times
counter.increment();
counter.increment();

// to remove the counte we would use  the removeListener method
counter.removeListener('incremented', callback);

//now the number will be incremented but will not show so in this example 13 does not show as the listener was removed.
counter.increment();


// adds the listener back to again react to 'incremented' events emitted.
counter.addListener('incremented', callback);

//now with the listener back it shows again.
counter.increment();
