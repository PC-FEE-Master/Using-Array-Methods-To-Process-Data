


// answer 1
var price = 0

items.forEach(function(item){
  price += Number(item.price)

})
var avg = price / items.length
document.querySelector('#answer1').innerHTML = `The average price is $${avg.toFixed(2)}`

// answer 2
let pricearray = items.filter(function(a) {

  if (a.price > 14.00 && a.price < 18.00) {
    return true
  }else{
    return false
  }
})
var final = pricearray.map(function(b){
  return b.title
}).join('\n\n')

document.querySelector("#answer2").innerHTML = final;

// answer 3
let answer = items.filter(function(a) {
  if (a.currency_code === "GBP") {
    return true;
  } else {
    return false;
  }
})
let final_3 = answer.map(function(b) {
  return b.title + 'costs &pound;' + b.price;

})
console.log(final_3);
document.querySelector("#answer3").innerHTML = final_3;
