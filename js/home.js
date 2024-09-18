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

      // step- 3: verify pin number

      if (pinNUmber === '1234') {
            console.log('adding money to your account')
            // step 4: get the current balance

            const balance = document.getElementById('account-balance').innerText
            console.log(balance)

            // step 5: add addMoneyInput with current balance
            const addMoneyNumber = parseFloat(addMoneyInput)
            const balanceNumber = parseFloat(balance)
            const newBalance = addMoneyNumber + balanceNumber;
            console.log(newBalance);

            // update the balance in the UI/DOM
            document.getElementById('account-balance').innerText = newBalance;



      }else{
            alert('pls try again')
      }
})