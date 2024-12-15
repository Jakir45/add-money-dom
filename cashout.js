document.getElementById('Pay-btn').addEventListener('click',function(event){
    event.preventDefault();
    
    const cashOut =document.getElementById('addmoney').value;
    const pinnumber = document.getElementById('pin-number').value;
    console.log(cashOut,pinnumber)

    if(pinnumber === '1234'){

        const newbalance =document.getElementById('balance').innerText;

        const newvalue =parseFloat(cashOut);
        const cashour =parseFloat(newbalance);

        const newamount = cashour - newvalue;

        document.getElementById('balance').innerText = newamount;

        console.log(newamount)
    }
    else{
        alert('invaled pin')
    }
})