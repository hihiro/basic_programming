// 全部でmap使うから最初に定義
var map;

window.onload = function () {
	//厳格モード
	"use strict";
	var latlng = new google.maps.LatLng(35.561334, 139.575128);

	var opt = {
		zoom: 15,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	map = new google.maps.Map(document.getElementById('map'), opt);
	get_Center();
	get_Zoom();
};

function set_Center() {
	//幻覚モード
	"use strict";
	//テキストボックスから緯度、経度を読み込む
	var lat, lng;
	lat = Number(document.getElementById('lat').value);
	lng = Number(document.getElementById('lng').value);

	//読み込んだ座標をroadedlatlngという箱にまとめる
	var roadedlatlng = {
		lat,
		lng
	};

	//マップの真ん中を読み込んだ座標に更新する
	map.setCenter(roadedlatlng);
	get_Center();
}

function set_Zoom() {
	//厳格モード
	"use strict";
	//テキストボックスから倍率を読み込む
	var zoom;
	zoom = Number(document.getElementById('ratio').value);


	//１以下は１、２０以上は２０にふるいおとす
	if (zoom <= 1) {
		zoom = 1;
	} else if (zoom >= 20) {
		zoom = 20;
	}

	//マップの倍率を更新する
	map.setZoom(zoom);
	get_Zoom();
}

function get_Center() {
	//厳格モード
	"use strict";
	document.getElementById('center').innerHTML = ("座標：" + map.getCenter());
}

function get_Zoom() {
	//厳格モード
	"use strict";
	document.getElementById('zoom').innerHTML = ("倍率：" + map.getZoom());
}
