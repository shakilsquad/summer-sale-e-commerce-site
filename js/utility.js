// main function
function setInnerTExt(id, text){
      document.getElementById(id).innerText=text;
}
const  total = 0;


function setInnerPrice(id,number){
     document.getElementById(id).innerText=number;
     total = parseInt(prices) + parseInt('first-price');
     document.getElementById('first-price').innerText = prices;
}

/**
 let total = 0;
function handleClickeDIv(target){
     const selectItemContainer = document.getElementById('select-item');

     const itemName = target.parentNode.childNodes[3].childNodes[3].childNodes[3].innerText;
     const li =document.createElement('li');
     li.innerText = itemName;
     selectItemContainer.appendChild(li);

     const price = target.parentNode.childNodes[3].childNodes[3].childNodes[5].innerText.split(' ')[0];
     total = parseInt(total) + parseInt(price);
    
     document.getElementById('price').innerText=total;
     
}
 */