document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked')
    /*
     * 1.get the element by id
     * 2.get the value from the element 
     * convert string value to a number
     * */
    
    const newDepositAmount = getInputFieldValueById('deposit-field');
    /*
    1.get previous deposit total by od
    */ 
    const previousDepositTotal= getTextElementValueByID('deposit-total');

    // claculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value 
    setTextElementValueById('deposit-total', newDepositTotal);
    
    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})