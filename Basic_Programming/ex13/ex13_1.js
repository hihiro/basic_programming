// JavaScript Document

function days(){
	var day = ["日", "月", "火", "水", "木", "金", "土"];
	
	
	var x = "";
	for(var n = 1;n <= 31;n ++){
		x = x + "<li>" + n + "日" + "(" + day[n%7] + ")</li>";
	}
	document.getElementById('calendar').innerHTML = x;
}