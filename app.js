const display = document.getElementById("display");
const btnN1 = document.getElementById("n1");
const btnN2 = document.getElementById("n2");
const btnN3 = document.getElementById("n3");
const btnN4 = document.getElementById("n4");
const btnN5 = document.getElementById("n5");
const btnN6 = document.getElementById("n6");
const btnN7 = document.getElementById("n7");
const btnN8 = document.getElementById("n8");
const btnN9 = document.getElementById("n9");
const btnN0 = document.getElementById("n0");
const btnN00 = document.getElementById("n00");
const btnDecimal = document.getElementById("decimal");
//Operators
const btnClear = document.getElementById("clear");
const btnPlus = document.getElementById("plus");
const btnMinus = document.getElementById("minus");
const btnMultiply = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");
const btnResidue = document.getElementById("residue");
const btnPotency = document.getElementById("potency");
const btnRoot = document.getElementById("root");
const btnEqual = document.getElementById("equal");

let decimal = false;
let total = 0;
let total_aux = 0;
let operator = "";
let op = {
	"+": 1,
	"-": 1,
	"*": 1,
	"/": 1,
	"%": 1,
	"^": 1,
	"√": 1
};

function writeDisplay(value) {
	
	if(value.includes(".") && !decimal) {
		decimal = true;
		if(display.value === "") {
			display.value = "0.";
		}
		else
		{
			display.value += value;
		}
	}
	else if(!value.includes(".")) {
		display.value += value;
	}
}

function operatorActual(op_num)
{
	if(op[op_num] % 2 == 1)
	{
		total_aux = parseFloat(display.value);
		display.value = "";
		decimal = false;
		return false;
	}
	else
	{
		return true;
	}
}

function plus(num)
{
	let yes = operatorActual("+");
	if(yes)
	{
		total = total_aux + num;
		display.value = total;
	}
}

function rest(num)
{
	let yes = operatorActual("-");
	if(yes)
	{
		total = total_aux - num;
		display.value = total;
	}
}

function multiply(num)
{
	let yes = operatorActual("*");
	if(yes)
	{
		total = total_aux * num;
		display.value = total;
	}
}

function divide(num)
{
	let yes = operatorActual("/");
	if(yes)
	{
		total = total_aux / num;
		display.value = total;
	}
}

function residue(num)
{
	let yes = operatorActual("%");
	if(yes)
	{
		total = total_aux % num;
		display.value = total;
	}
}

function potency(num)
{
	let yes = operatorActual("^");
	if(yes)
	{
		total = total_aux ** num;
		display.value = total;
	}
}

function root(num)
{
	let yes = operatorActual("√");
	if(yes)
	{
		total = Math.sqrt(num);
		display.value = total;
	}
}

function equal()
{
	if(operator === "+")
	{
		plus(parseFloat(display.value));
		op["+"] += 1;
		//operator = "";
	}
	else if(operator === "-")
	{
		rest(parseFloat(display.value));
		op["-"] += 1;
		//operator = "";
	}
	else if(operator === "*")
	{
		multiply(parseFloat(display.value));
		op["*"] += 1;
		//operator = "";
	}
	else if(operator === "/")
	{
		divide(parseFloat(display.value));
		op["/"] += 1;
		//operator = "";
	}
	else if(operator === "%")
	{
		residue(parseFloat(display.value));
		op["%"] += 1;
		//operator = "";
	}
	else if(operator === "^")
	{
		potency(parseFloat(display.value));
		op["^"] += 1;
	}
	else
	{
		display.value = total;
	}
}

// Events Keyboard
document.addEventListener("keydown", function (event) {
	var key = event.key;
	
	switch(key)
	{
		case "1":
			writeDisplay("1");
			break;
		case "2":
			writeDisplay("2");
			break;
		case "3":
			writeDisplay("3");
			break;
		case "4":
			writeDisplay("4");
			break;
		case "5":
			writeDisplay("5");
			break;
		case "6":
			writeDisplay("6");
		case "7":
			writeDisplay("7");
			break;
		case "8":
			writeDisplay("8");
			break;
		case "9":
			writeDisplay("9");
			break;
		case "0":
			writeDisplay("0");
			break;
		case ".":
			writeDisplay(".");
			break;
	}
});

// Events Numbers
btnN1.addEventListener("click", () => {
	writeDisplay("1");
})

btnN2.addEventListener("click", () => {
	writeDisplay("2");
})

btnN3.addEventListener("click", () => {
	writeDisplay("3");
})

btnN4.addEventListener("click", () => {
	writeDisplay("4");
})

btnN5.addEventListener("click", () => {
	writeDisplay("5");
})

btnN6.addEventListener("click", () => {
	writeDisplay("6");
})

btnN7.addEventListener("click", () => {
	writeDisplay("7");
})

btnN8.addEventListener("click", () => {
	writeDisplay("8");
})

btnN9.addEventListener("click", () => {
	writeDisplay("9");
})

btnN0.addEventListener("click", () => {
	writeDisplay("0");
})

btnN00.addEventListener("click", () => {
	writeDisplay("00");
})

btnDecimal.addEventListener("click", () => {
	writeDisplay(".");
})

// Events Operators
btnClear.addEventListener("click", () => {
	display.value = "";
	total = 0;
	total_aux = 0;
	decimal = false;
	op["+"] = 0;
})

btnEqual.addEventListener("click", () => {
	equal();
})

btnPlus.addEventListener("click", () => {
	plus(parseFloat(display.value));
	operator = "+";
	op["+"] += 1;
})

btnMinus.addEventListener("click", () => {
	rest(parseFloat(display.value));
	operator = "-";
	op["-"] += 1;
})

btnMultiply.addEventListener("click", () => {
	multiply(parseFloat(display.value));
	operator = "*";
	op["*"] += 1;
})

btnDivide.addEventListener("click", () => {
	divide(parseFloat(display.value));
	operator = "/";
	op["/"] += 1;
})

btnResidue.addEventListener("click", () => {
	residue(parseFloat(display.value));
	operator = "%";
	op["%"] += 1;
})

btnPotency.addEventListener("click", () => {
	potency(parseFloat(display.value));
	operator = "^";
	op["^"] += 1;
})

btnRoot.addEventListener("click", () => {
	root(parseFloat(display.value));
	operator = "√";
	op["√"] += 1;
})
