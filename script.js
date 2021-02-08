var mymap = L.map('mapid').setView([38.8, -89.58], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

var marker1 = L.marker([38.56694, -90.49470]).addTo(mymap);

var marker2 = L.marker([38.62521, -90.19111]).addTo(mymap);

var marker3 = L.marker([38.60055, -90.24290]).addTo(mymap);

var marker4 = L.marker([38.62017, -90.27325]).addTo(mymap);

var marker5 = L.marker([38.71714, -90.44806]).addTo(mymap);

marker1.bindPopup("<b>Resturant 1</b><br>Troy Mediterranean Cuisine").openPopup();
marker2.bindPopup("<b>Resturant 2</b><br>Three Sixty").openPopup();
marker3.bindPopup("<b>Resturant 3</b><br>The Vine Cafe").openPopup();
marker4.bindPopup("<b>Resturant 4</b><br>Charlie Gitto's on the Hill").openPopup();
marker5.bindPopup("<b>Resturant 5</b><br>India Palace").openPopup();
