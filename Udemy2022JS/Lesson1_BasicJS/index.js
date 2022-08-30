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
function calculateTip(bill){
    const tip = bill >= 50 && bill <= 300 ? 0.15 : 0.2;
    const totalAmount = bill + (bill * tip);
    console.log(`The bill was ${bill} and tip was ${tip} and total amount paid was ${totalAmount}`);
}
calculateTip(275); //316.25
calculateTip(40); //48
calculateTip(430); //516
const inputBill = document.getElementById("bill-el")




























