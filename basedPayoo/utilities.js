function getInputFieldValueById(id){
    // console.log('jakir');
    // const addmoney =document.getElementById('add-money').value;
    // return addmoney;


    const inputValue =document.getElementById(id).value;
    const addvalue =parseFloat(inputValue)
    return addvalue;
}