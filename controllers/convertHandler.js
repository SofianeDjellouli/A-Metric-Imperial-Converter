/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) { 
    if (input.indexOf('/')!==input.lastIndexOf('/')){
      return 'Invalid Input (double fraction)'
    }
    return input.match(/[a-zA-Z]+|[0-9./]+/g).length===2?
       eval(input.match(/[a-zA-Z]+|[0-9./]+/g)[0]): 1
  };
  
  this.getUnit = function(input) {
    return input.match(/[a-zA-Z]+|[0-9./]+/g).length===2?
      input.match(/[a-zA-Z]+|[0-9./]+/g)[1]:input.match(/[a-zA-Z]+|[0-9./]+/g)[0]
  };
  
  this.units=['gal','lbs','mi','km','kg','l']
  
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
