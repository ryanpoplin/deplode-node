'use strict';

const moment = require('moment');

let timeStampExpensive, timeStampTimer;
expensive(600);
function expensive (n) {
    timeStampExpensive = moment().format();
    let i = 0;
    while (++i < n * n) { console.log(i); }
    return i;
}

console.log('Hey, when is that expensive function going to stop executing it\'s functionality?');

setTimeout(() => {
    timeStampTimer = moment().format();
}, 300);
let difference = moment.utc(timeStampTimer).diff(moment(timeStampExpensive));
console.log(`It took ${moment.duration(difference).seconds()} seconds for the event loop to get to this queued task...`);

// let cnt = 0;