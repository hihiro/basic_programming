function q1() {
	var i = 0;
	while (i < 200) {
		document.write("�M���I<br>");
		i = i + 1;
	}
}

function q2() {
	var e = document.getElementById('a').value;
	e = Number(e);
	var f;
	if (e % 2 == 0 && e != 0) {
		f = "����";
	} else {
		f = "�";
	}
	alert(e + "��" + f + "�ł��I");
}

function q3() {
	var g = document.getElementById('b').value;
	g = Number(g);
	var j = 0;
	for (var h = 1; h < 10; h = ++h) {
		j = h * g;
		document.write(g + "�~" + h + "��" + j + "<br>");
	}
}

function q4() {
	var k = 10; //�i��
	for (var l = 1; l <= k; l = ++l) {
		for (var o = 1; o <= l; o = ++o) {
			document.write("TCU�@");
		}
		document.write("<br>");
	}
}

function q5() {
	var p = document.getElementById('c').value; //�i��
	for (var q = 1; q <= p; q = ++q) {
		for (var r = 1; r <= q; r = ++r) {
			document.write("TCU�@");
		}
		document.write("<br>");
	}
}

function q6() {
	var s = document.getElementById('d').value; //�i��
	var ans = document.getElementById('f');
	for (var t = 1; t <= s; t = ++t) {
		for (var u = 0; u <= s - t; u = ++u) {
			ans.innerHTML += "TCU�@";
		}
		ans.innerHTML += "<br>";
	}
}

function q7() {
	var v = document.getElementById('e');
	var w = document.getElementById('f');
	var x = 0;
	while (x < v.value) {
		w.innerHTML += "TCU </br>";
		x = ++x;
	}
}

function q8() {
	var y = document.getElementById('g');
	var aa = document.getElementById('h');
	for (var ab = 0; ab < y.value; ab = ++ab) {
		for (var ac = 0; ac <= ab; ac = ++ac) {
			aa.innerHTML += "TCU�@";
		}
		aa.innerHTML += "<br>";
	}
}
