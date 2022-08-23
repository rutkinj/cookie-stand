'use strict';

function cookieStore(location, minCust, maxCust,
  avgCookieCust, openTime, closeTime) {

  self.location = location;
  self.minCust = minCust;
  self.maxCust = maxCust;
  self.avgCookieCust = avgCookieCust;
  self.openTime = openTime;
  self.closeTime = closeTime;
  self.total = 0;
}


let seattleStore = {
  location: 'Seattle',
  minCusHourly: 23,
  maxCustHourly: 65,
  avgCookieCust: 6.3,
  // assume military time
  openTime:6,
  closeTime:20,
  salesHourly:[],
  dailyTotal:0,
  hoursOfOp:[],


  randomRange: function(lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
  },

  populateHoursOfOp: function(open, close){
    this.hoursOfOp = [];
    let isAM = true;
    for(let i = open; i < close; i++){
      let h = i;
      if (i === 12){
        isAM = false;
        h += 12;
      }

      if (isAM){
        this.hoursOfOp.push(`${h}am`);
      }else{
        h -= 12;
        this.hoursOfOp.push(`${h}pm`);
      }
    }
    this.salesHourly = this.hoursOfOp;
    return this.hoursOfOp;
  },

  estimateHour: function(){
    let custHour = this.randomRange(this.minCusHourly,this.maxCustHourly);
    return Math.floor(custHour * this.avgCookieCust);
  },

  estimateDay: function(){
    this.salesHourly = [];
    for (let i = 0; i < this.closeTime - this.openTime; i++){
      let hourlyTotal = this.estimateHour();
      this.salesHourly.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    return this.salesHourly;
  },

  simulateDay: function(){
    this.populateHoursOfOp(this.openTime,this.closeTime);
    this.estimateDay();
  }

};



let tokyoStore = {
  location: 'Tokyo',
  minCusHourly: 3,
  maxCustHourly: 24,
  avgCookieCust: 1.2,
  // assume military time
  openTime: 6,
  closeTime: 20,
  salesHourly: [],
  dailyTotal: 0,
  hoursOfOp: [],


  randomRange: function (lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
  },

  populateHoursOfOp: function (open, close) {
    this.hoursOfOp = [];
    let isAM = true;
    for (let i = open; i < close; i++) {
      let h = i;
      if (i === 12) {
        isAM = false;
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
  },

  estimateHour: function () {
    let custHour = this.randomRange(this.minCusHourly, this.maxCustHourly);
    return Math.floor(custHour * this.avgCookieCust);
  },

  estimateDay: function () {
    this.salesHourly = [];
    for (let i = 0; i < this.closeTime - this.openTime; i++) {
      let hourlyTotal = this.estimateHour();
      this.salesHourly.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    return this.salesHourly;
  },

  simulateDay: function () {
    this.populateHoursOfOp(this.openTime, this.closeTime);
    this.estimateDay();
  }

};



let dubaiStore = {
  location: 'Dubai',
  minCusHourly: 11,
  maxCustHourly: 38,
  avgCookieCust: 3.7,
  // assume military time
  openTime: 6,
  closeTime: 20,
  salesHourly: [],
  dailyTotal: 0,
  hoursOfOp: [],


  randomRange: function (lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
  },

  populateHoursOfOp: function (open, close) {
    this.hoursOfOp = [];
    let isAM = true;
    for (let i = open; i < close; i++) {
      let h = i;
      if (i === 12) {
        isAM = false;
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
  },

  estimateHour: function () {
    let custHour = this.randomRange(this.minCusHourly, this.maxCustHourly);
    return Math.floor(custHour * this.avgCookieCust);
  },

  estimateDay: function () {
    this.salesHourly = [];
    for (let i = 0; i < this.closeTime - this.openTime; i++) {
      let hourlyTotal = this.estimateHour();
      this.salesHourly.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    return this.salesHourly;
  },

  simulateDay: function () {
    this.populateHoursOfOp(this.openTime, this.closeTime);
    this.estimateDay();
  }

};



let parisStore = {
  location: 'Paris',
  minCusHourly: 20,
  maxCustHourly: 38,
  avgCookieCust: 2.3,
  // assume military time
  openTime: 6,
  closeTime: 20,
  salesHourly: [],
  dailyTotal: 0,
  hoursOfOp: [],


  randomRange: function (lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
  },

  populateHoursOfOp: function (open, close) {
    this.hoursOfOp = [];
    let isAM = true;
    for (let i = open; i < close; i++) {
      let h = i;
      if (i === 12) {
        isAM = false;
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
  },

  estimateHour: function () {
    let custHour = this.randomRange(this.minCusHourly, this.maxCustHourly);
    return Math.floor(custHour * this.avgCookieCust);
  },

  estimateDay: function () {
    this.salesHourly = [];
    for (let i = 0; i < this.closeTime - this.openTime; i++) {
      let hourlyTotal = this.estimateHour();
      this.salesHourly.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    return this.salesHourly;
  },

  simulateDay: function () {
    this.populateHoursOfOp(this.openTime, this.closeTime);
    this.estimateDay();
  }

};



let limaStore = {
  location: 'Lima',
  minCusHourly: 2,
  maxCustHourly: 16,
  avgCookieCust: 4.6,
  // assume military time
  openTime: 6,
  closeTime: 20,
  salesHourly: [],
  dailyTotal: 0,
  hoursOfOp: [],


  randomRange: function (lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
  },

  populateHoursOfOp: function (open, close) {
    this.hoursOfOp = [];
    let isAM = true;
    for (let i = open; i < close; i++) {
      let h = i;
      if (i === 12) {
        isAM = false;
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
  },

  estimateHour: function () {
    let custHour = this.randomRange(this.minCusHourly, this.maxCustHourly);
    return Math.floor(custHour * this.avgCookieCust);
  },

  estimateDay: function () {
    this.salesHourly = [];
    for (let i = 0; i < this.closeTime - this.openTime; i++) {
      let hourlyTotal = this.estimateHour();
      this.salesHourly.push(hourlyTotal);
      this.dailyTotal += hourlyTotal;
    }
    return this.salesHourly;
  },

  simulateDay: function () {
    this.populateHoursOfOp(this.openTime, this.closeTime);
    this.estimateDay();
  }

};

function writeToHTML(obj, eleId){
  obj.simulateDay();

  let list = document.getElementById(eleId);
  for (let i = 0; i < obj.hoursOfOp.length; i++) {
    newLiWithInKVStyle(obj.hoursOfOp[i], obj.salesHourly[i], list);
  }
  newLiWithInKVStyle('Total', obj.dailyTotal, list);
}

function newLiWithInKVStyle(key, val, parentList){
  let li = document.createElement('li');
  li.textContent = `${key}: ${val}`;
  parentList.appendChild(li);
}

writeToHTML(seattleStore, 'olSeattle');
writeToHTML(tokyoStore, 'olTokyo');
writeToHTML(dubaiStore, 'olDubai');
writeToHTML(parisStore, 'olParis');
writeToHTML(limaStore, 'olLima');
