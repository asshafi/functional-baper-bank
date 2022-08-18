/*
1.add withdraw button event handler
2.get withdraw amount by using gelInputFieldValueById function
3.get previous withdraw amount by using getTextElementValueById function
4.calculate new withdraw total and set the value
4-5.set new withdraw total by using setTextElementValue function
5.get previous balance total by using getTextElementValueById function
6.calculate new balance total
7.set balance total using setTextElementValue function
*/ 


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWtithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueByID('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWtithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWtithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})