var cinema = require("../jsondummies/cinema.json");
var restaurant = require("../jsondummies/restaurant.json");

//console.log(cinema.ActivityDescription[0].properties[0].values[0].value);

//console.log(cinema.Activity[2].name);

//console.log(cinema.Activity[2].genre);

var activityValue = cinema.ActivityDescription[0].properties[0].values[0].value;
var activityName = cinema.ActivityDescription[0].properties[0].name;
var activityRating = cinema.ActivityDescription[0].properties[0].weight;

console.log(activityValue);

var items = cinema.Activity.filter(function(item){
  return (item.name===activityName);
});

console.log(items);

/*var search = cinema.Activity.filter(cinema.Activity.keys(), function (key) {
    var obj = iterator[key];
    return iterator.every(query, function (val, queryKey) {
        return ref(obj, queryKey) === val;
    });
});*/

console.log(cinema.Activity[0].genre);

var items2 = cinema.Activity.filter(
  function(item2){
    return (item2.aggregateRating>=activityRating);
  }
);

console.log(items2);
