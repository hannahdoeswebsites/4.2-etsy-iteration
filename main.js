var _ = require('underscore');
var items = require('./items.json');

_.each(items, function(item){
 // console.log(item.title);
});

var prices = _.map(items, function(item){
     return (item.price);
});

console.log(prices);

//Find average of all numbers. Put numbers into an array and then find sum then average.

var sum = _.reduce(prices, function(memo, num){ return memo + num; }, 0);
console.log(sum);
var average = (sum / items.length).toFixed(2);
console.log(average);

//Find items that are greater than $14 and less than $18. Should be three items.

var filterResult = _.filter(items, function(item){
  return item.price > 14 && item.price < 18;
});

console.log(filterResult.length);

//find the item with a "GBP" currency code and print its name and price.

var GBP = _.map(items, function(item){
     return (item.currency_code);
});

console.log(GBP);

var gbpItem = _.filter(items, function(item){
  return (item.currency_code == "GBP");
}).pop();

console.log(gbpItem.title, "cost", gbpItem.price, "GBP");
