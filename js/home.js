// add money to the account

// step 1: add event handeler to the  add money button inside the form
document.getElementById('btn-add-primary').addEventListener('click', function(event){
      event.preventDefault()
//      step 2 : get money to be added to the account
      const addMoneyInput = document.getElementById('input-add-money').value;
      console.log(addMoneyInput)
//     get the pin number provided 
      const pinNUmber = document.getElementById('input-pin-number').value
      console.log(pinNUmber)
})