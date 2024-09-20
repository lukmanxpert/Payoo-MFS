document.getElementById("cash-out").addEventListener("click", function () {
  document.getElementById("cash-out-form").classList.remove("hidden");
  document.getElementById("cash-in-form").classList.add("hidden");
});
document.getElementById("cash-in").addEventListener("click", function () {
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("cash-in-form").classList.remove("hidden");
});

const currentBalance = document.getElementById("current-balance").innerText;
const cashOutBalance = document.getElementById("to-reduce-balance").value;
console.log(cashOutBalance);

document
  .getElementById("reduce-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const currentBalance = document.getElementById("current-balance").innerText;
    const cashOutBalance = document.getElementById("to-reduce-balance").value;
    const currentBalanceNumber = parseFloat(currentBalance);
    const cashOutBalanceNumber = parseFloat(cashOutBalance);
    const updateMoney = currentBalanceNumber - cashOutBalanceNumber;
    document.getElementById('current-balance').innerText = updateMoney;
  });
