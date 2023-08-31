'use strict';
const jsIsFun = true;

const country = ['Russia', 'Mongolia', 'China', 'Nepal', 'India', 'Srilanka']

country.forEach(function (ele, ind, array) {
    console.log(`${ind + 1} : ${ele} of total ${array}`);
})