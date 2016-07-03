/**
 * Created by mmaia on 7/3/16.
 */
'use strict';

let owners = new WeakMap();
let task = {
    title : "Big Project"
};

owners.set(task, 'John');

function owner(task) {
    if(owners.has(task)){
        return console.log(owners.get(task));
    }
    console.log('No owners for this task.');
}

owner(task);
owner({});
