const billInput = document.querySelector('.bill-input');
const personInput = document.querySelector('.people-input');

let tipAmount = document.querySelector('.tipAmount');
let totalAmount = document.querySelector('.totalAmount');

const tipButtons = document.querySelectorAll('.tip-button');
const tipInput = document.querySelector('.tip-input')

const resetButton = document.querySelector('.reset-button');
let flag = false;

tipButtons.forEach((button) => {
button.addEventListener("click", function() {
    tipButtons.forEach(btn => {btn.classList.remove('buttonActive')});
    this.classList.add('buttonActive');
    flag = false;
})
});

tipInput.addEventListener("click", function() {
    tipButtons.forEach(btn => btn.classList.remove('buttonActive'))
    flag = true;
});


const calculateTip = () => {
    if(flag===true && billInput.value !== "" && personInput.value !== "") {
        if(personInput.value<1) {
            personInput.value = 1;
        }
        const tip = (tipInput.value/100 * billInput.value)/personInput.value;
        tipAmount.textContent = "$" + tip.toFixed(2);
        totalAmount.textContent = "$" + (tip.toFixed(2) * personInput.value).toFixed(2);
    }
    else if(flag===false && billInput.value !== "" && personInput.value !== "") {
        if(personInput.value<1) {
            personInput.value = 1;
        }
        const percentage = document.querySelector('.buttonActive').getAttribute('data-percentage')
        const tip = (percentage/100 * billInput.value)/personInput.value;
        tipAmount.textContent = "$" + tip.toFixed(2);
        totalAmount.textContent = "$" + (tip.toFixed(2) * personInput.value).toFixed(2);
    } 
}

window.addEventListener("click", calculateTip);


const resetFunction = () => {
    billInput.value = "";
    personInput.value = "";
    tipAmount.textContent = "$0.00";
    totalAmount.textContent = "$0.00";
    tipInput.value = "";
    tipButtons.forEach(btn => {btn.classList.remove('buttonActive')});
}

resetButton.addEventListener("click", resetFunction)