// console.log('Hello')
// setp 1: event handler
// document.getElementById('btn-login').addEventListener('click', function(event){  
//       // setp 2: default behavior(prevent: reloading browser) 
//       event.preventDefault()   
      
//       // step 3: get the phone number and pin number
//       const phoneNumber = document.getElementById('phone-number').value;
//       const pinNumber = document.getElementById('pin-number').value
//       console.log(phoneNumber, pinNumber);
//       // step 4: validate phone and pin
//       // this is not the ideal away
//       if (phoneNumber === '5' && pinNumber === '1234') {
//             console.log('you logged in')
//             // step 5: allow user use the website
//       }else{
//             alert('wrong phone number or pin')
//       }

// })

document.getElementById('btn-login').addEventListener('click', function(event){
      event.preventDefault()
      // get phoneNumber and pinNumber
      const phoneNumber = document.getElementById('phone-number').value
      const pinNUmber = document.getElementById('pin-number').value
      console.log(phoneNumber, pinNUmber)
      // bad way to validate 
      if (phoneNumber === '1234' && pinNUmber === '5') {
            console.log('you logged in')
            window.location.href = '/home.html'
      }else{
            alert('wrong phone number or pin')
      }
})