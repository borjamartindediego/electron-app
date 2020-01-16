/*
var Chance = require('chance'); // Load chance library
var chance = new Chance(); //Instantiate Chance 
var chance = require('chance').Chance(); //All in one line
var my_random_string = chance.string();
document.body.append(my_random_string);
Goal: Take details from excel spreadsheet, and output to the GUI 
Requirements: exceljs, fs


const ExcelJS = require('exceljs');

function 
*/

window.onload = () => {
    fetchPage('page-1.html');
};

function fetchPage(filename){
    fetch('./app/pages/'+filename)
    .then((response) => {
        return response.text();
    })
    .then((html) => {
        document.getElementById('app').innerHTML = html;
    });
}
