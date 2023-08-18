document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    const depositTotal = document.getElementById('deposit-total');
    const preDepositTotalString = depositTotal.innerText;
    const preDepositTotal = parseFloat(preDepositTotalString)

    const currentDeposittotal = preDepositTotal + newDepositAmount;

    depositTotal.innerText = currentDeposittotal;
    // balance update 


    const balanceTotal = document.getElementById('balance-total');
    const preBalanceTotalString = balanceTotal.innerText;
    const preBalanceTotal = parseFloat(preBalanceTotalString);

    const currentBalanceTotal = preBalanceTotal + newDepositAmount;
    balanceTotal.innerText = currentBalanceTotal

    depositField.value = '';
})