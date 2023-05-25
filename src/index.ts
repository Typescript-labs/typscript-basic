//  =========================
//    Leaning a tyeps
//  =========================

// type any
let sales = 20;
let course = "typescript";
let is_published = true;
let level; // any type

// type array
let arr: number[] = [];
arr.forEach((n) => n.toFixed(2));

// type tuples

let uses: [number, string, number] = [1, "deepak", 9];

//  types enums
const enum Sizes {
  Small = "a",
  Medium = "b",
  Large = "c",
}
let mySize: Sizes = Sizes.Medium;
console.log(mySize);

// functions

function calculateTx(income: number, taxYear = 2000): number {
  if ((taxYear || 2022) < 2022) return income * 1.3;
  return income * 1.2;
}

calculateTx(10_00);

// object
type Employees = {
  readonly id: number;
  name: string;
  retire: (data: Date) => void;
};

let employee: Employees = {
  id: 1,
  name: "deepak",
  retire: (date: Date) => console.log(date),
};

// Advance types -
// Narrowing
function KgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.3;
  else return parseInt(weight) * 1.1;
}

KgToLbs(20);
KgToLbs("20");

// Intersection type

type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UiWidget = Draggable & Resizable;

let textBox: UiWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types

type Quantity = 10 | 20;

let quantity: Quantity = 10;

type Unit = "inc" | "fit";

function greet(name: string | null): string {
  if (name) return name.toLowerCase();
  else return "hola";
}

greet("deepak");

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
if (customer !== null && customer !== undefined) console.log(customer.birthday);
