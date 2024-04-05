document.getElementById("calculate_btn").addEventListener("click", function(event) {
  event.preventDefault()

let amountPaid = parseFloat(document.getElementById("amount").value);
let priceOfToken = parseFloat(document.getElementById("token").value);
let varPercentage = parseFloat(document.getElementById("var").value);

let varAmount = amountPaid * (varPercentage/100);
let totalToken = amountPaid - varAmount;
let token = Math.floor(totalToken / priceOfToken);

document.getElementById("result").innerText = "result" + token
});

