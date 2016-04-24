'use strict';

// const moment = require('moment');
//
// let timeStampExpensive, timeStampTimer;
// expensive(600);
// function expensive (n) {
//     // timeStampExpensive = moment().format();
//     let i = 0;
//     while (++i < n * n) { console.log(i); }
//     return i;
// }

// console.log('Hey, when is that expensive function going to stop executing it\'s functionality?');
//
// setTimeout(() => {
//     timeStampTimer = moment().format();
// }, 300);
// let difference = moment.utc(timeStampTimer).diff(moment(timeStampExpensive));
// console.log(`It took ${moment.duration(difference).seconds()} seconds for the event loop to get to this queued task...`);

// let cnt = 0;
// let timer = setInterval(() => {
//     console.log('Interval', ++cnt);
// }, 3000);
//
// expensive(100);
// expensive(200);
// expensive(1000);

// function onClick (e) {
//     console.log('click', new Date());
// }
//
// var button = document.querySelector('button');
// button.addEventListener('click', onClick);
// // button.dispatchEvent(new Event('click'));
//
// expensive(1000);

// func.apply(x, y); refresher...
// function Super (param1, param2, param3) {
//     this.name = 'Super';
//     if (param1 || param2 || param3 !== undefined) {
//         console.log(param1, param2, param3);
//     }
// }
// Super.prototype.getName = function (param) {
//     console.log(`${this.name} is a ${param}`);
// };
//
// function Sub () {
//     this.name = 'Sub';
// }
// Sub.prototype.getName = function () {
//     console.log(this.name);
// };
// Sub.prototype.applyScopeAndData = function () {
//     Super.apply(this, ['a', 'b', 'c']);
//     Super.prototype.getName.call(this, 'decent JavaScript programmer');
// };
//
// new Super();
// let leSub = new Sub();
//
// leSub.applyScopeAndData();
// leSub.getName();

// let events = 0;
//
// function debounce (func, limit) {
//     let timer;
//     return function debounced(args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => {
//             timer = null;
//             func.apply(this, args);
//         }, limit);
//     }
// }