"use strict";

const allSheets = SpreadsheetApp.getActiveSpreadsheet().getSheets();
const links = [
  "firstLink",
  "secondLink",
  "thirdLink",
  "fourthLink",
  "fifthLink",
  "sixthLink",
];

const fillCells = function (sheetPosition, link1, link2, link3) {
  sheetPosition.getRange("A3").setValue(link1);
  sheetPosition.getRange("B3").setValue(link2);
  sheetPosition.getRange("C3").setValue(link3);
};

const fillAllSheets = function (allSheets) {
  let index = 0;
  allSheets.forEach((sheet) => {
      fillCells(sheet, links[index], links[++index], links[++index]);
      index++;
  });
};

function execute() {
  fillAllSheets(allSheets);
};