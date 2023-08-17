document.getElementById('btn-withdraw').addEventListener('click',function(){
    if(isNaN(getNewValue('withdraw-field'))){
        alert('Please input numbers!')
        return
    }
    if(getNewValue('withdraw-field')>getCurrentValue('balance-total')){
        document.getElementById('withdraw-field').value = ""
        alert('Bapper bank a eto taka nai!!!!')
        return
    }
    const updatedValue = getCurrentValue('withdraw-total')+getNewValue('withdraw-field')
    document.getElementById('withdraw-total').innerText = updatedValue
    const prev = parseFloat(document.getElementById('balance-total').innerText)
    document.getElementById('balance-total').innerText = prev-parseFloat(document.getElementById('withdraw-field').value)
    document.getElementById('withdraw-field').value = ""

})

// document.getElementById('btn-withdraw').addEventListener('click',function(){
//     const withdrawField = document.getElementById('withdraw-field')
//     const currentWithdraw = withdrawField.value

//     withdrawField.value = ''
 
//     if(isNaN(parseFloat(currentWithdraw))){
//         alert('Please input numbers!')
//         return
//     }
//     const withdrawAmount = document.getElementById('withdraw-total')
//     const prevWithdraw = withdrawAmount.innerText

//     const newWithdraw = parseFloat(currentWithdraw) + parseFloat(prevWithdraw)

//     const currentBalance = document.getElementById('balance-total')


//     if(parseInt(currentWithdraw)>parseInt(currentBalance.innerText)){
//         alert('Baaper bank a eto taka nai!!!')
//         return;
//     }
//     withdrawAmount.innerText = newWithdraw
//     currentBalance.innerText = parseFloat(currentBalance.innerText) - parseFloat(currentWithdraw)

// })

