document.getElementById('btn-deposit').addEventListener('click',function () {
    const depositField = document.getElementById('input-deposit');
    // use .value to get input value
    const depositAmount = depositField.value;
    // console.log(inputAmount);
    const deposittotalElement = document.getElementById('deposit-total');
    const depositTotal = deposittotalElement.innerText;
    deposittotalElement.innerText = depositAmount;
    
 


})
