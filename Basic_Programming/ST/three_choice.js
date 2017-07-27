function test(doko) {
	var errors = "答えを選択して下さい。";
	var dore = -1;
	for (var i = 0; i < 3; i++) {
		if (document.forms[doko].elements[i].checked === true) {
			dore = document.forms[doko].elements[i].value;
		}
	}
		if (dore === -1) {
			alert(errors);
		} else {
			alert(dore);
		}
	
}
