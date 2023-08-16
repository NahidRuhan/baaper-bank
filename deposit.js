document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositField = document.getElementById('deposit-field')
    const newDepositAmount = depositField.value

    depositField.value = ''

    if(isNaN(parseFloat(newDepositAmount))){
        alert('Please input numbers!')
        return
    }
    const depositTotalElement = document.getElementById('deposit-total')
    const prevDepositTotal = depositTotalElement.innerText
    const currentDepositTotal = parseFloat(depositTotalElement.innerText) + parseFloat(depositField.value)
    depositTotalElement.innerText = currentDepositTotal

    const BalanceTotalElement = document.getElementById('balance-total')
    const prevBalanceTotal = BalanceTotalElement.innerText
    const currentBalanceTotal = parseFloat(prevBalanceTotal)+ parseFloat(newDepositAmount)
    BalanceTotalElement.innerText = currentBalanceTotal
})

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-field')
    const currentWithdraw = withdrawField.value

    withdrawField.value = ''
 
    if(isNaN(parseFloat(currentWithdraw))){
        alert('Please input numbers!')
        return
    }
    const withdrawAmount = document.getElementById('withdraw-total')
    const prevWithdraw = withdrawAmount.innerText

    const newWithdraw = parseFloat(currentWithdraw) + parseFloat(prevWithdraw)

    const currentBalance = document.getElementById('balance-total')


    if(parseInt(currentWithdraw)>parseInt(currentBalance.innerText)){
        alert('Baaper bank a eto taka nai!!!')
        return;
    }
    withdrawAmount.innerText = newWithdraw
    currentBalance.innerText = parseFloat(currentBalance.innerText) - parseFloat(currentWithdraw)

})