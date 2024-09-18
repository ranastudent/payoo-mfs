

document.getElementById('btn-add-primary').addEventListener('click', function(event){
      event.preventDefault();

      //  get Money and the pin number

      const addMoney = document.getElementById('input-add-money').value
      const addMoneyNumber = parseFloat(addMoney)

      const pinNumber = document.getElementById('input-pin-number').value

      // console.log(addMoney, pinNumber)

      if (pinNumber === '1234') {
            // console.log('you logged in')
            // add Money
            const balance = document.getElementById('account-balance').innerText
            console.log(balance)
            const balanceNumber = parseFloat(balance)
            // new balance
            const newBalance = balanceNumber + addMoneyNumber
            // update the dom with new update balance
            document.getElementById('account-balance').innerText = newBalance
            
      }else{
            alert('Fail to add money. please try again or later')
      }
})