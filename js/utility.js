const inputType = document.getElementById('input-type');
const applyButton = document.getElementById('apply-button');

inputType.addEventListener('keyup', (SELL200) =>{
     const value = SELL200.currentTarget.value;
     if( value == " "){
          applyButton.disabled = true;
        
     }
     else{
          applyButton.disabled = false;
          // applyButton.classList.remove('on')
     }
    
})

