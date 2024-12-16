document.getElementById('btn-cash-money').addEventListener('click',function(event){
    event.preventDefault();

    const cashout =getInputValueById('cash-out-money')
    const pinNumber =getInputValueById('cash-pin-number');
    
    if(pinNumber === 1234){
        const balance =getTextFieldValueById('balance')
        const totalcashout = balance - cashout;
        document.getElementById('balance').innerText = totalcashout;

    }
    else{
        alert('Field to Pin Number')
    }
    console.log(cashout,pinNumber)
})