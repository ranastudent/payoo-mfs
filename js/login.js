// console.log('Hello')
// setp 1: event handler
document.getElementById('btn-login').addEventListener('click', function(event){  
      // setp 2: default behavior(prevent: reloading browser) 
      event.preventDefault()   
      console.log('login btn clicked')
      // step 3: get the phone number
      const phoneNumber = document.getElementById('phone-number').value
      console.log(phoneNumber);
})