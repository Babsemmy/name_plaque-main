// Adding variables to store our data
const userInput = document.querySelector('.field-input')
const userLeterPreview = document.querySelector('.plaque-prev')
const userPricePreview = document.querySelector('#plaquePrice')
const buy_Now = document.querySelector('.buy-submit')
const result= document.querySelector('.outcome')



// Refactoring with Arrow Function
const countLeters = (some_data) =>{
  const Name = some_data.replaceAll(' ', '')
  const raw= some_data.replaceAll(' ', '').length;
  const price= raw * 5; // price of each letter
  userLeterPreview.textContent = some_data
  userPricePreview.textContent = '$'+price


//My Arrow Head Function
const buyNow =(some_data) => {
  if (raw===0){
    result.textContent="Please input letters!";
    result.style.backgroundColor='red';
    // prompt("Please input letters!")
  }
  else if (Name=='YOURNAME'){
    result.textContent="Enter a new text.";
    result.style.backgroundColor='blue';
    // prompt("Wait.")
  }
  else if (raw>15){
    result.textContent="We have 15 letters left in stock, and you have exceeded the limit.";
    result.style.backgroundColor='tomato';
    // prompt("We have 15 letters left in stock, and you have exceeded the limit.")
  }
  else  {
    result.textContent="Success!"
    result.style.backgroundColor='green';
    // prompt("Success!")
  }
  
   }
  
   buy_Now.addEventListener('click', buyNow)
}

userInput.oninput = (e)=>{
  countLeters(e.target.value)
}


