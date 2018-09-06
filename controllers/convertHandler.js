/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) { 
//     we check if the input includes more than one /
    if (input.indexOf('/')!==input.lastIndexOf('/')){
      return 'Invalid Input (double fraction)'
    }
//     returns the input if it includes a number including fraction, 
//     otherwise, returns 1
    return input.match(/[a-zA-Z]+|[0-9./]+/g).length===2?
       eval(input.match(/[a-zA-Z]+|[0-9./]+/g)[0]): 1
  };
  
// returns the unit part of the input with the same logic as above
  this.getUnit = function(input) {
    return input.match(/[a-zA-Z]+|[0-9./]+/g).length===2?
      input.match(/[a-zA-Z]+|[0-9./]+/g)[1]:input.match(/[a-zA-Z]+|[0-9./]+/g)[0]
  };
  
  this.units=['gal','lbs','mi','km','kg','l']
  
// loops through the units variable to return the lowercase opposite of the input unit
  this.getReturnUnit = function(initUnit) {
    for (let i=0;i<this.units.length;i++){
      if (initUnit.toLowerCase()===this.units[i]){
        return this.units[this.units.length-i-1]
      }
    }
  };

  this.spellOutUnit = function(unit) {  
    return unit.toLowerCase();
  };
  
// loops to use the converters in different ways according 
// to the position of the init unit if the units variable
  this.convert = function(initNum, initUnit) {
    initUnit=initUnit.toLowerCase()
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var converters=[galToL,lbsToKg,miToKm]
    for (let i=0;i<this.units.length;i++){
      if (initUnit===this.units[i] && i < 3){
        return initNum*converters[i]
      } else if (initUnit===this.units[i] && i > 2){
        return initNum/converters[this.units.length-i-1]
      }
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    initUnit=initUnit.toLowerCase()
    returnNum=Math.round(returnNum * 100000) / 100000
    if (initUnit==='gal'){
      return initNum+' gallons converts to '+returnNum+' liters'
    } else if (initUnit==='lbs'){
      return initNum+' pounds converts to '+returnNum+' kilograms'
    } else if (initUnit==='mi'){
      return initNum+' miles converts to '+returnNum+' kilometers'
    } else if (initUnit==='kg'){
      return initNum+' kilograms converts to '+returnNum+' pounds'
    } else if (initUnit==='km'){
      return initNum+' kilometers converts to '+returnNum+' miles'
    } else if (initUnit==='l'){
      return initNum+' liters converts to '+returnNum+' gallons'
    }
  };
  
}

module.exports = ConvertHandler;
