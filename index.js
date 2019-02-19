// Write your solution in this file!
const driver;

function updateDriverWithKeyAndValue(driver, key, value){
return Driver.assign({}, driver, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  let prop = key;
  driver[prop] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let newdriver = Driver.assign({}, driver);
  delete newdriver[key];
  return newdriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver.key;
  return driver;
}
