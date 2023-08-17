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