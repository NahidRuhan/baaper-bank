document.getElementById('btn-deposit').addEventListener('click',function(){
    if(isNaN(getNewValue('deposit-field'))){
        alert('Please input numbers!')
        return
    }
    const updatedValue = getCurrentValue('deposit-total')+getNewValue('deposit-field')
    document.getElementById('deposit-total').innerText = updatedValue
    const prev = parseFloat(document.getElementById('balance-total').innerText)
    document.getElementById('balance-total').innerText = prev+parseFloat(document.getElementById('deposit-field').value)
    document.getElementById('deposit-field').value = ""
})

// document.getElementById('btn-deposit').addEventListener('click',function(){
//     const depositField = document.getElementById('deposit-field')
//     const newDepositAmount = depositField.value

//     depositField.value = ''

//     if(isNaN(parseFloat(newDepositAmount))){
//         alert('Please input numbers!')
//         return
//     }
//     const depositTotalElement = document.getElementById('deposit-total')
//     const prevDepositTotal = depositTotalElement.innerText

//     const currentDepositTotal = parseFloat(prevDepositTotal) + parseFloat(newDepositAmount)

//     depositTotalElement.innerText = currentDepositTotal

//     const BalanceTotalElement = document.getElementById('balance-total')
//     const prevBalanceTotal = BalanceTotalElement.innerText
//     const currentBalanceTotal = parseFloat(prevBalanceTotal)+ parseFloat(newDepositAmount)
//     BalanceTotalElement.innerText = currentBalanceTotal
// })