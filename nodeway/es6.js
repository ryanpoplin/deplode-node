'use strict';

function varCheckNum (num) {
    if (num > 10) {
        var isTrue = true;
    } else {
        var isTrue = false;
    }
    // here's the problem with functional scoped 'var's
    isTrue = 'asdfjkl;';
    console.log(isTrue);
}

// varCheckNum(2);
// varCheckNum(15);

function letCheckSum (num) {
    if (num > 10) {
        let isTrue = true;
    } else {
        let isTrue = false;
    }
    console.log(isTrue);
}

// letCheckSum(2);
// letCheckSum(15);

const pi = parseFloat(3.14);
console.log(pi === parseFloat(3.14));

// const pi = 42; // const error!

// ES5.x
function addEm (a, b) {
    console.log(a + b);
}

let addEm2 = function (a, b) {
    console.log(a + b);
}

let langs = ['Swift', 'JavaScript', 'C', 'C++'];
langs.sort(function (a, b) {
    if (a > b) {
        console.log(1);
    } else if (a < b) {
        console.log(-1);
    } else {
        console.log(0);
    }
});
console.log(langs);

// ...


