var sum = 0;
var input = "";
var calc = "+";
var flag = 1;
var pc = 0;

function number(operator) {
	flag = 0;
	input += operator;
	document.getElementById('answer').innerHTML = input;
	ac();
}

function calculation(operator) {
	if (flag == 0) {
		flag = 1;
		work_space = sum + calc + input;
		sum = eval(work_space);
		input = "";
		document.getElementById('answer').innerHTML = sum;
	}
	if (operator == "=") {
		sum = 0;
		calc = "+";
	} else {
		calc = operator;
	}
	ac();
}

function change() {
	document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML * -1;
	ac();
}

function percent() {
	if (pc == 0) {
		document.getElementById('answer').innerHTML = document.getElementById('answer').innerHTML / 100;
	}
	pc = 1;
	ac();
}

function cancel() {
	sum = 0;
	calc = "+";
	input = "";
	pc = 0;
	document.getElementById('answer').innerHTML = sum;
	document.getElementById('cancel_button').innerHTML = "C";
}

function ac() {
	document.getElementById('cancel_button').innerHTML = "C";
	while (document.getElementById('answer').innerHTML == "0") {
		document.getElementById('cancel_button').innerHTML = "AC";
		console.warn("ここまできたよ");
	}
}
