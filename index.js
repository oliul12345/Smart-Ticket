const getData = document.getElementsByClassName("oli");
// console.log(getData)
let seatBook = 0;
let price = 0;
const arr = [];

for (const seat of getData) {

  seat.addEventListener("click", function () {
    console.log(seat)
    seat.disabled = true;
    seatBook = seatBook + 1;
    const remainingSeat = document.getElementById("total-seat").innerText;
    console.log(remainingSeat)
    const totalSeat = remainingSeat - 1;
    const totalPrice = price + 550;
    const perSeatPrice = parseFloat(document.getElementById('total-price').innerText) + totalPrice
    setInnerText("book-seat", seatBook);
    setInnerText("total-seat", totalSeat);
    setInnerText("total-price", perSeatPrice);
 
    
    ///   table related work
    const putDataContainer = document.getElementById("book-seat-info");
    const getSeatInnerText = seat.innerText;
    arr.push(getSeatInnerText)
    if(arr.length <= 4){
      const createTr = document.createElement('tr')
      const td = document.createElement('td')
      td.innerText = getSeatInnerText
      const p = document.createElement('td');
      const tk = document.createElement('td');
      p.innerText = 'economic';
      tk.innerText = 550
      createTr.appendChild(td)
      createTr.appendChild(p)
      createTr.appendChild(tk)
      putDataContainer.appendChild(createTr)
      console.log(getSeatInnerText);
     
      setInnerText("grand-total", perSeatPrice);
      //// ****************** ////////
      setBackgroundColorById(getSeatInnerText)
    }
    else{
     return alert('Your seat limit is exist')
    }

    ////  coupon part here 
document.getElementById('coupon-btn').addEventListener('click',function(){
  // setInnerText('grand-total',perSeatPrice);
  const getInputValue = document.getElementById('coupon-input').value;
  if(getInputValue === 'NEW15'){
    const discount = perSeatPrice * .15 ;
    const afterDiscount = perSeatPrice - discount;
    setInnerText('grand-total',afterDiscount);
    console.log('parse',afterDiscount)
  }
  else if( getInputValue === 'Couple 20'){
    const discount = perSeatPrice * .20 ;
    const afterDiscount = perSeatPrice - discount;
    setInnerText('grand-total',afterDiscount);
    console.log('parse',afterDiscount)
  }
  else{
    alert('invalid coupon')
  }
  console.log(getInputValue)
})
  });
 
}
console.log(arr)


function setInnerText(id, value) {
  const getId = document.getElementById(id);
  getId.innerText = value;
}
function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-600');
}



document.getElementById("inputField").addEventListener("keyup", function() {
  var inputText = this.value.trim(); // Get the value of the input field
  var enableButton = document.getElementById("enableButton");
  console.log(arr.length)
  if (inputText !== "" && arr.length === null) { 
      enableButton.removeAttribute("disabled"); 
    
  } else {
      enableButton.setAttribute("disabled", "disabled");
  }
});