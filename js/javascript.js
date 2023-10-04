// const firstCard= 'handleproduct';
let selectItem= document.getElementById('select-item');
const firstDiv= document.getElementById('first-div');
const showPrice= document.getElementById('total-price');
let discountPrice= document.getElementById('discount-price');
let allPrice= document.getElementById('all-price');
discountPrice.innerText='20 %';
let totalPrice = 0;
function handleProduct(even){
     const productName= even.childNodes[3].childNodes[3].innerText;
     const priceItem= parseFloat(even.childNodes[3].childNodes[5].innerText)
     const li=document.createElement('li');
     li.innerText=productName;
     selectItem.appendChild(li);

     totalPrice+=priceItem
     showPrice.innerText=totalPrice
     let discount = totalPrice - (totalPrice * .20)
     
     allPrice.innerText= discount
   console.log(discount)
     
} 