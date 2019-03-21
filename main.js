


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
document.querySelector("#answer3").innerHTML = final_3;

// answer 4
<<<<<<< HEAD
let wooditems =
  items
    .filter(a => a.materials.includes("wood"))
    .map(a => a.title + ` is made of wood.`)
    .join(`<br><br>`)

    document.querySelector("#answer4").innerHTML = wooditems;

=======
let wooditems = items.materials.indexOf("wood");


console.log(wooditems);
>>>>>>> f820d4a9b74f80e01ae1ee00dc887ceded892ce1


// answer 5

<<<<<<< HEAD
let eightormore =
  items
    .filter(a => a.materials.length >= 8)
    .map(a => `${a.title} has ${a.materials.length} materials:<br>${a.materials.join(`<br>`)}`)
    .join(`<br><br>`)

    document.querySelector("#answer5").innerHTML = eightormore;


//answer 6

let sellers =
  items
    .filter(a => a.who_made === "i_did").length
    

    document.querySelector("#answer6").innerHTML = `${sellers} were made by their sellers.`
=======













//answer 6
>>>>>>> f820d4a9b74f80e01ae1ee00dc887ceded892ce1
