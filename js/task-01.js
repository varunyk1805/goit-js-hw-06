"use strict"
const categories = document.querySelectorAll('li.item');
console.log('Number of categories: ' + categories.length);

categories.forEach(item => {
    const nameOfCategory = item.querySelector('h2').textContent;
    console.log('Category: ' + nameOfCategory);
    const numberOfElements = item.querySelectorAll('li').length;
    console.log('Elements: ' + numberOfElements);
});