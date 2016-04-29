'use strict';

function checkNum (num) {
    if (num > 10) {
        var isTrue = true;
    } else {
        var isTrue = false;
    }
    // here's the problem with functional scoped 'var's
    isTrue = 'asdfjkl;';
    console.log(isTrue);
}

checkNum(2);
checkNum(15);

