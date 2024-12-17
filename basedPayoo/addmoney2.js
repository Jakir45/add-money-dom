document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    
    const totalnumber =getInputValueById('add-money');
    const pinNumber =getInputValueById('pin-number');

    if(pinNumber === 1234){
        const total = getTextFieldValueById('balance');

        const totaltaka =total +totalnumber;
        document.getElementById('balance').innerText = totaltaka

        const p =document.createElement('p');
        p.innerText = `add: ${totalnumber} tk. New Balance :${totaltaka}`
        document.getElementById('newadd').appendChild(p)
        console.log(p)
    }
    console.log(totalnumber,pinNumber)
})