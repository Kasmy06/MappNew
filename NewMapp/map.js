
// Initialiser la carte
var tiles = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    maxZoom: 38,
    attribution:
      '&copy; <a href="https://wi-agri.com/wiagri/">wiagri</a> contributors',
  }
),
  latlng = L.latLng(7.539989, -5.54708);

var map = L.map("map", {
  center: latlng,
  zoom: 8,
  layers: [tiles],
});



  const api_url = 'http://192.168.4.241/rest-api-repo/public/api/location/v2/wiagri-actors'
    async function getISS(){
      const response = await fetch (api_url);
      const data = await response.json();
   // const { latitude, longitude } = data;
  //  [[7.679, -5.791], [9.195,-3.718],[5.374,-6.873], [5.508,-3.390],[9.178,-3.551],[8.552,-7.298]]
      
        coords = data.data;
      
     
        console.log(coords);
    for (let i = 0; i < coords.length; i++){
      const LngLat = coords[i].lng_lat.split(",");

      if (LngLat[0] != "" && LngLat[1] != "") {
        var latLngToAdd = L.latLng(LngLat[0],LngLat[1]);
        var type_acteur = coords[i].details[0].type_acteur;
        var nbre_acteur = coords[i].details[0].nbre_acteur;
        var localite = coords[i].localite;
        var sous_prefecture = coords[i].sous_prefecture;
      
        var marker = L.marker(latLngToAdd).addTo(map);
      
        var popup = marker.bindPopup("Acteur :"+type_acteur+"<br> Nombre : "+nbre_acteur+"<br>  localité :"+localite+"<br> sous prefecture:"+sous_prefecture).openPopup()
	      popup.addTo(map);
      }
    }

      
    }
    
    getISS();

    
	// var singleMarker = L.marker([7.679, -5.791]);

	// var popup = singleMarker.bindPopup('This is wi-agri' + singleMarker.getLatLng()).openPopup()
	// popup.addTo(map);

  
// var markers = new L.markerClusterGroup();

// for (var i = 0; i < data.length; i++) {
//   const LngLat = data[i].lng_lat.split(",");
//   var latLngToAdd = L.latLng(LngLat[0], LngLat[1]);

//   var m = L.marker(latLngToAdd);
//   m._latlng["auguinard_kouame"] = data[i].type_acteur;

//   markers.bindPopup(title);

// }

// map.addLayer(markers);
// markers.addLayer(m);
// // create acustom popup
//     function customPopu(data){
//         return  `<div>
//                 <h4> ${data.sous_prefecture}</h4>
//                 <h4> ${data.localite}</h4>
//                 <h4> ${data.total_acteur}</h4>
//                 <h4> ${lng_lat}</h4>
//             </div>`;
//     }

   