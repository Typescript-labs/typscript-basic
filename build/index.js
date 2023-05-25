"use strict";
let sales = 20;
let course = "typescript";
let is_published = true;
let level;
let arr = [];
arr.forEach((n) => n.toFixed(2));
let uses = [1, "deepak", 9];
let mySize = "b";
console.log(mySize);
function calculateTx(income, taxYear = 2000) {
    if ((taxYear || 2022) < 2022)
        return income * 1.3;
    return income * 1.2;
}
calculateTx(1000);
let employee = {
    id: 1,
    name: "deepak",
    retire: (date) => console.log(date),
};
function KgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.3;
    else
        return parseInt(weight) * 1.1;
}
KgToLbs(20);
KgToLbs("20");
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 10;
function greet(name) {
    if (name)
        return name.toLowerCase();
    else
        return "hola";
}
greet("deepak");
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
if (customer !== null)
    console.log(customer.birthday);
//# sourceMappingURL=index.js.map