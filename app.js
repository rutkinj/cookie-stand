'use strict';

////////////////// CONSTRUCTOR ////////////////

function Store(loc, minCust, maxCust,
  avgCookieCust, openTime = 6, closeTime = 20) {

  this.loc = loc;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookieCust = avgCookieCust;
  this.openTime = openTime;
  this.closeTime = closeTime;
  this.total = 0;
  this.simulatedHourlySales = [];
  this.hoursOfOp = [];

  this.populateHoursOfOp();
  this.estimateDay();
  arrOfStores.push(this);
}

//////////////// PROTOTYPES ///////////////////

Store.prototype.totalsByHour = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
Store.prototype.grandTotal = [0,];

Store.prototype.populateHoursOfOp = function (open = 6, close = 20) {
  let isAM = true;
  for (let i = open; i < close; i++) {
    let h = i;
    if (i === 12) {
      isAM = false;
      //time hackers
      h += 12;
    }

    if (isAM) {
      this.hoursOfOp.push(`${h}am`);
    } else {
      h -= 12;
      this.hoursOfOp.push(`${h}pm`);
    }
  }
  this.salesHourly = this.hoursOfOp;
  return this.hoursOfOp;
};

Store.prototype.randomRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Store.prototype.estimateHour = function (minCust = this.minCust, maxCust = this.maxCust) {
  let custHour = this.randomRange(minCust, maxCust);
  return Math.floor(custHour * this.avgCookieCust);
};

Store.prototype.estimateDay = function () {
  for (let i = 0; i < this.closeTime - this.openTime; i++) {
    let hourlyTotal = this.estimateHour();
    this.simulatedHourlySales.push(hourlyTotal);
    this.totalsByHour[i] += hourlyTotal;
    this.total += hourlyTotal;
  }
  this.grandTotal[0] += this.total;
  return this.salesHourly;
};

Store.prototype.fillRow = function (element, targetId, arrayToWrite) {
  for (let i = 0; i < arrayToWrite.length; i++) {
    this.makeWriteAppend(element, targetId, arrayToWrite[i]);
  }
};

Store.prototype.makeWriteAppend = function (element, targetId, content) {
  let parent = document.getElementById(targetId);
  let li = document.createElement(element);
  li.textContent = content;
  parent.appendChild(li);
};

Store.prototype.makeNewRow = function (rowId, targetId) {
  let parent = document.getElementById(targetId);
  let tr = document.createElement('tr');
  tr.setAttribute('id',rowId);
  parent.appendChild(tr);
};

Store.prototype.render = function() {
  this.makeNewRow(this.loc, 'table');
  this.makeWriteAppend('th', this.loc, this.loc);
  this.fillRow('td', this.loc, this.simulatedHourlySales);
  this.makeWriteAppend('th', this.loc, this.total);
};

/////////////// END PROTO ////////////////

/////////////// STORES INIT //////////////

let arrOfStores = [];
let seattle = new Store('Seattle', 23, 65, 6.3, 6, 20);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 3.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

//////// TOTALS GARBAGE REFACTOR PLS //////////////
// let totalsByHour = [];

// function calcTotalsByHour(){
//   for (let item of seattle.hoursOfOp){
//     totalsByHour.push(0);
//   }
//   for (let store of stores){
//     for (let i = 0; i < store.simulatedHourlySales.length; i++){
//       totalsByHour[i] += store.simulatedHourlySales[i];
//     }
//   }
// }

// function calcGrandTotal(){
//   let grandTotal = 0;
//   for (let i = 0; i < Store.totalsByHour.length; i++){
//     grandTotal += Store.totalsByHour[i];
//   }
//   return grandTotal;
// }

// calcTotalsByHour();

////////////// TOP/BOTTOM ROWS FUNC ////////////////////

function makeTopRow(){
  seattle.makeNewRow('times', 'table');
  seattle.makeWriteAppend('th', 'times', 'Locations');
  seattle.fillRow('td', 'times', seattle.hoursOfOp);
  seattle.makeWriteAppend('th', 'times', 'Daily Totals');
}

function makeBottomRow(){
  seattle.makeNewRow('totals', 'table');
  seattle.makeWriteAppend('th', 'totals', 'Totals');
  seattle.fillRow('td', 'totals', seattle.totalsByHour);
  seattle.makeWriteAppend('th', 'totals', seattle.grandTotal[0]);
}

///////////// RENDER TABLE /////////////

makeTopRow();

for (let store of arrOfStores){
  store.render();
}

makeBottomRow();

//////////// LISTENER AND FUNCS ///////////
let formEl = document.getElementById('new-loc-form');
formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event){
  event.preventDefault();
  let newLoc = createAndAddLoc(event.target);
  newLoc.render();
  redoBottomRow();
}

function createAndAddLoc(location){
  let {locationName, minCustHour, maxCustHour, avgCookieCust} = location;
  clearDupeRow(locationName.value);
  let newLoc = new Store(
    locationName.value,
    parseInt(minCustHour.value),
    parseInt(maxCustHour.value),
    parseInt(avgCookieCust.value));
  return newLoc;
}

function clearDupeRow(newLoc){
  for (let store of arrOfStores){
    if (newLoc === store.loc){
      let oldLoc = document.getElementById(store.loc);
      oldLoc.remove();
    }
  }
}

function redoBottomRow(){
  let totalsRow = document.getElementById('totals');
  totalsRow.remove();
  makeBottomRow();
}

