// step-1: set event handler
// document.getElementById('btn').addEventListener('click',function(event){
//     // step-2: prevent default behavior
//     event.preventDefault();
//     // step-3:get the phone number
//     const phoneNumber =document.getElementById('phone').value;
//     const pinNumber =document.getElementById('pin').value;
//     console.log(phoneNumber, pinNumber);

//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are login')
//     }
//     else{
//         alert('wrong phone number or pin')
//     }

// })
document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber =document.getElementById('phone').value;
    const pinNumber =document.getElementById('pin').value;
    
    if(phoneNumber === '5' && pinNumber === '4455'){
        console.log('login please')
        window.location.href ='/home.html'
    }
    else{
        alert('worng')
    }


})


