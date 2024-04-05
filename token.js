function promptUser (message) {
    let userResponse = parseFloat(prompt(message))
    //    to make sure the user responds with a number greater than zero
    if (isNaN(userResponse) || userResponse <= 0){
     return alert("input has to be a number and input has to be greater than zero(0)")
    }
    {
        return userResponse
    }
}

function calculatePowerToken() {
    let amountPaid = promptUser(
        "Enter the amount paid(including VAT):"
    );

    let unitPrice = promptUser(
        "Enter the price of one power unit in Tokens:"
    );

    let vatRate = promptUser(
        "Enter the VAT rate as a percentage:"
    );

    //   to calculate the token
    let vatAmount = totalAmountPaid * (vatRate/100);
    let totalAmountPaid = amountPaid - vatAmount;
    let token = Math.floor(totalAmountPaid/ unitPrice);

    let display = document.createElement("div");
    display.classList.add("display");
    display.innerHTML = `${token} tokens`;

document.body.appendChild(display);

}

calculatePowerToken ()