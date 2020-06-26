'use strict';

export const utilsService = {
    storeToStorage,
    loadFromStorage,
    getRandomInt,
    getRandomId,
    formatCurrency,
    compareValues
}

function storeToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value) || null);
}
function loadFromStorage(key) {
    let data = localStorage.getItem(key);
    return (data) ? JSON.parse(data) : undefined;
}


function getRandomId() {
    var pt1 = Date.now().toString(16);
    var pt2 = getRandomInt(1000, 9999).toString(16);
    var pt3 = getRandomInt(1000, 9999).toString(16);
    return `${pt3}-${pt1}-${pt2}`.toUpperCase();
}

function getRandomInt(num1, num2) {
    var max = (num1 >= num2)? num1+1 : num2+1;
    var min = (num1 <= num2)? num1 : num2;
    return (Math.floor(Math.random()*(max - min)) + min);
}

function formatCurrency(lang, currencyCode, price) {
    return new Intl.NumberFormat(lang, {
        style: 'currency',
        currency: currencyCode,
      }).format(price);
}

function compareValues(key, order = 'asc') {
    return function innerSort(a, b) {
        const x = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
        const y = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
        let comparison = 0;
        if (x > y) comparison = 1;
        else if (x < y) comparison = -1;
        return (
            (order === 'desc') ? (comparison * -1) : comparison
        );
    };
}