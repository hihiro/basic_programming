// JavaScript Document
function drawRect() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	ctx.lineWidth = 10.0; //線の太さを10.0にする
	ctx.strokeStyle = "black"; //線の色を黒にする
	ctx.fillStyle = "lightgrey"; //図形の塗りつぶしの色を薄灰色にする

	ctx.fillRect(50, 50, 100, 100); //(50, 50)の座標に塗りつぶした四角形を描画
	ctx.strokeRect(50, 50, 100, 100); //(50, 50)の座標に一辺100の四角形を描画
}

function drawN() {
	var canvas = document.getElementById('canvas1');
	var ctx = canvas.getContext('2d');
	var nK = document.getElementById('formN').value;
	nk = Number(nK);

	var x = 100;
	var y = 100;
	var r = 80;

	ctx.lineWidth = 3.0;
	ctx.strokeStyle = "black";
	ctx.fillStyle = "lightgrey";

	ctx.beginPath();
	ctx.moveTo(x + Math.sin(0 * 2 * Math.PI / nK) * r, y - Math.cos(0 * 2 * Math.PI / nK) * r);
	for (var i = 1; i <= nK; i = i + 1) {
		ctx.lineTo(x + Math.sin(i * 2 * Math.PI / nK) * r, y - Math.cos(i * 2 * Math.PI / nK) * r);
	}
	ctx.fill();
	ctx.stroke();
	ctx.closePath();
}

function drawCheck() {
	var canvas = document.getElementById('canvas2');
	var ctx = canvas.getContext('2d');

	var x, y;
	for (y = 0; y < 200; y += 20) {
		for (x = 0; x < 200; x += 20) {
			if ((x + y) % 40 == 0) {
				ctx.fillStyle = "black";
				ctx.fillRect(x, y, 20, 20);
			}
		}
	}
}

function drawCheck2() {
	var canvas = document.getElementById('canvas3');
	var ctx = canvas.getContext('2d');

	var x2, y2;
	for (y2 = 0; y2 < 200; y2 += 20) {
		for (x2 = 0; x2 < 200; x2 += 20) {
			if ((x2 + y2) % 40 == 0) {
				if ((x2 + y2) % 80 == 0) {
					ctx.fillStyle = "black";
					ctx.fillRect(x2, y2, 20, 20);
				} else {
					ctx.fillStyle = "lightgreen";
					ctx.fillRect(x2, y2, 20, 20);
				}
			}

		}
	}
}

function drawCheck3() {
	var canvas = document.getElementById('canvas4');
	var ctx = canvas.getContext('2d');

	var x3, y3;
	for (y3 = 0; y3 < 200; y3 += 20) {
		for (x3 = 0; x3 < 200; x3 += 20) {
			if (x3 == y3) {
				ctx.fillStyle = "#E0E0E0";
				ctx.fillRect(x3, y3, 20, 20);
				console.warn("debug　x:" + (x3 / 20) + "　y:" + (y3 / 20) + "BGcolor");
			} else
			if ((x3 % 40 == 0) || (y3 % 40 == 0)) {
				ctx.fillStyle = "black";
				ctx.fillRect(x3, y3, 20, 20);
				console.error("debug　x:" + (x3 / 20) + "　y:" + (y3 / 20) + "black");
			}
		}
	}
}
