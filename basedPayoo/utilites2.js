function getInputValueById(id){
    const addmoney =document.getElementById(id).value;
    const value =parseFloat(addmoney)
    return value;
}

function getTextFieldValueById(id){
    const textField =document.getElementById(id).innerText;
    const textNumber =parseFloat(textField)
    return textNumber
}
function showSection(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}