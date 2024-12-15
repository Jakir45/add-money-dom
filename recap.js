document.getElementById('Pay-btn').addEventListener('click',function(event){
    event.preventDefault();

    const addmoney =document.getElementById('input-money').value;

    const pinnumber =document.getElementById('pin-number').value;
    console.log(addmoney,pinnumber)

    if(pinnumber === '1234'){
        const totalamount =document.getElementById('balance').innerText;

        const totalmoney = parseFloat(addmoney);
        const totalbalance =parseFloat(totalamount);

        const totaltaka =totalbalance + totalmoney;

        console.log(totaltaka);

        document.getElementById('balance').innerText = totaltaka;
    }
    else{
        alert('Failed to add money')
    }
})



// document.getElementById('Pay-btn').addEventListener('click',function(event){
//     event.preventDefault();

//     const addmoney =document.getElementById('input-money').value;
//     const pinNumber =document.getElementById('pin-number').value;
//     console.log(addmoney,pinNumber)

//     if(pinNumber === '1234'){
//        const balance =document.getElementById('balance').innerText;
//        const totalmoney =parseFloat(addmoney);
//        const totalbalance =parseFloat(balance);

//        const totalamount =totalbalance +totalmoney;
//        console.log(totalamount)
//        document.getElementById('balance').innerText = totalamount
//     }
// })
// document.getElementById('Pay-btn').addEventListener('click',function(event){
//     event.preventDefault();

//     const addmoney =document.getElementById('add-money').value;
//     const pinNumber =document.getElementById('pin-number').value;
//     console.log(addmoney,pinNumber)

//     if(pinNumber === '1234'){
//        const balance =document.getElementById('balance').innerText;
//        const totalmoney =parseFloat(addmoney);
//        const totalbalance =parseFloat(balance);

//        const totalamount =totalbalance -totalmoney;
//        console.log(totalamount)
//        document.getElementById('balance').innerText = totalamount
//     }
// })
// document.getElementById('').addEventListener('click',function(){
//     document.getElementById('cash-out-from').classList.remove('hidden');

//     document.getElementById('from-add').classList.add('hidden');
// })   