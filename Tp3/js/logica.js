let map;
let personLatitude;
let personLongitude;

function getPerson(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        let fechaN = (data.results[0].dob.date)
        let genero = (data.results[0].gender)
        let name = (data.results[0].name.first)
        let apellido = (data.results[0].name.last)
        let localidad = (data.results[0].location.city)
        let latitud = (data.results[0].location.coordinates.latitude)
        let longitud = (data.results[0].location.coordinates.longitude)
        let foto = (data.results[0].picture.large)
     
        document.getElementById("foto").src = foto;
        document.getElementById("foto").style.display = "block";
        document.getElementById("nombre").innerHTML =  name;
        document.getElementById("apellido").innerHTML = apellido;
        document.getElementById("fechaNacimiento").innerHTML = fechaN;
        document.getElementById("genero").innerHTML = genero;
        document.getElementById("latitud").innerHTML =  latitud;
        document.getElementById("longitud").innerHTML =  longitud;
        document.getElementById("localidad").innerHTML =  localidad;
        personLatitude= latitud;
        personLongitude= longitud;
        
        updateMap(personLatitude, personLongitude);
    }
)}

function generarNumeroRandom() {
    var numeroRandom = Math.floor(Math.random() * 826) + 1;
    return numeroRandom;
}

function getCharacter() {
    const input = document.querySelector('input[type="text"]');
    const id = Math.floor(Math.random()*826)+1;


    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        let name = (data.name)
        let status = (data.status)
        let species = (data.species)
        let location = (data.location.name)
        let gender = (data.gender)

        avatar.src = data.image;
        document.getElementById("avatar").style.display = "block";
        document.getElementById("name").innerHTML= name;
        document.getElementById("status").innerHTML = status;
        document.getElementById("species").innerHTML = species;
        document.getElementById("location").innerHTML = location;
        document.getElementById("gender").innerHTML = gender;
       
      })
}

function compareGenders() {
    const personGender = document.getElementById("genero").innerHTML.toLowerCase();
    const characterGender = document.getElementById("gender").innerHTML.toLowerCase();
  
    if (personGender == characterGender) {
        const iconTrue = document.getElementById("iconTrue");
        iconTrue.style.display = "block";
        const iconFalse = document.getElementById("iconFalse");
        iconFalse.style.display = "none";

      } else {
        const iconFalse = document.getElementById("iconFalse");
        iconFalse.style.display = "block";
        const iconTrue = document.getElementById("iconTrue");
        iconTrue.style.display = "none";
    }
}

function updateMap(latitude, longitude) {
    // Verificar si el mapa ya está inicializado
    if (!map) {
      // Inicializar el mapa con la ubicación de la persona
      map = L.map('map').setView([latitude, longitude], 10);
  
      // Agregar capa de mapa
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);
  
      // Agregar marcador en la ubicación de la persona
      L.marker([latitude, longitude]).addTo(map);
    } else {
      // Si el mapa ya está inicializado, actualizar la posición del marcador
      map.setView([latitude, longitude], 10);
      map.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
          layer.setLatLng([latitude, longitude]);
        }
      });
    }
  }
