const addMoneyButton = document.getElementById('add-money-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const userGivenPin = document.getElementById('given-pin').value;
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const toAddBalance = document.getElementById('to-add-balance').value;
    const toAddBalanceNumber = parseFloat(toAddBalance);
    if (userGivenPin === '1234') {
        const updateBalance = currentBalanceNumber + toAddBalanceNumber;
        document.getElementById('current-balance').innerText = updateBalance;
    }else{
        alert('Wrong Pin')
    }
})