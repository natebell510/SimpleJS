const btn1 = document.getElementById("btn-1");
btn1.addEventListener("click",function (){
    btn1.innerText = "CLICKED!"
});
const div1 = document.getElementById("div1");
function addDivs(){
    const newEls = `<ul>List:
    <li>Item 1</li>
    </ul>`;
    div1.innerHTML = newEls;
}
const day = 'monday';
switch (day){
    case "monday":
        console.log('Plan: Go to Bootcamp!')
        break;
    case "tuesday":
        console.log('Today is Tuesday, work does not stop')
        break;

}
//ternary is good for quick decision (logic)
const age = 29;
const eligible = age >= 18 ? "can drink" : 'can not drink';
console.log(eligible);
//coding challenge
//tip calculator
// output bill, tip, total
const billInput = document.getElementById("bill");

const btn = document.getElementById("calc-el");
const resultEl = document.getElementById("result-el");

function calc(){
    const bill = parseInt(billInput.value);
    const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    const totalAmount = bill + (bill * tip);
    resultEl.innerHTML = `<div>Your total is ${totalAmount}$!</div>`;
}

btn.addEventListener("click", function (){
    const bill = parseInt(billInput.value);
    const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    const totalAmount = bill + (bill * tip);
    resultEl.innerHTML = `<div>Your total is ${totalAmount}$!</div>`;
});
console.log(billInput.innerText)






























