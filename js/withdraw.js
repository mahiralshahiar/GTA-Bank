document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // this one for to clear value after enter
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Mahir: Provide a valid number')
        return;
    }
    // pre 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const preWithdrawTotalString = withdrawTotalElement.innerText;
    const preWithdrawTotal = parseFloat(preWithdrawTotalString);



    // total pre Ballance

    const balanceTotalElement = document.getElementById('balance-total');
    const preBalanceTotalString = balanceTotalElement.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);

    // validation
    if (newWithdrawAmount > preBalanceTotal) {
        alert('Out of balance')
        return;
    }
    // calculate total amount 

    const currentWithdrawTotal = preWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // new step

    const newBalanceTotal = preBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal;



})