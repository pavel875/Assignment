// function addRoom(){
//     var room_number = document.getElementById('room-number');
//     let price = document.getElementById('price');
//      console.log("room_number" + room_number);
//      console.log("price" + price);
//     // room_number += 1;
//     // room_number.innerHtml = room_number;
//     // price.innerHtml = room_number*price;
// }
document.querySelector('.plus').addEventListener('click',function(){
    var valueSpan = document.getElementById('value');
    var value = parseInt(valueSpan.textContent);
    value++;
    valueSpan.textContent = value;
});




document.querySelector('.plus').addEventListener('click', function(){
    let quantityElement = document.querySelector('.quantity');
    let priceElement = document.querySelector('.price');
    let quantity = parseInt(quantityElement.textContent);
    let initialPrice = parseInt(quantityElement.textContent)/quantity;
    console.log(quantity);
    console.log(initialPrice);

    quantity += 1;
    let newprice = initialPrice*quantity;

    quantityElement.textContent = quantity;
    priceElement.textContent = newprice;

