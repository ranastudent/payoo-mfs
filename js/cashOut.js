// console.log('cash out')

document.getElementById('btn-cash-out').addEventListener('click', function(event){
      event.preventDefault()

      const cashOut = document.getElementById('input-cash-out').value
      const cashOutNumber = parseFloat(cashOut)
      const pinNUmber = document.getElementById('input-cash-out-pin').value

      console.log(cashOut, pinNUmber)

      if (pinNUmber === '1234') {
            const balance = document.getElementById('account-balance').innerText
            
            const balanceNumber = parseFloat(balance)
            const newBalance = balanceNumber - cashOutNumber
            document.getElementById('account-balance').innerText = newBalance;
            console.log(newBalance)
      }else{
            alert('please try again')
      }
})