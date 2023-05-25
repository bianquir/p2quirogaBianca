function getPerson(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
    })
    .then (function(data){
        let nombre = (data.results)
        let fechaN = (data.results[0].dob.date)
        let genero = (data.results[0].gender)
        let name = (data.results[0].name.first)
        let apellido = (data.results[0].name.last)
        let localidad = (data.results[0].location.city)
        let latitud = (data.results[0].location.coordinates.latitude)
        let longitud = (data.results[0].location.coordinates.longitude)
        let ciudad = (data.results[0].location.city)
        let foto = (data.results[0].picture.large)
     
        document.getElementById("foto").src = foto;
        document.getElementById("foto").style.display = "block";
        document.getElementById("nombre").innerHTML = "Nombre: " + name;
        document.getElementById("apellido").innerHTML = "Apellido: " + apellido;
        document.getElementById("ciudad").innerHTML = "Ciudad: " + ciudad;
        document.getElementById("fechaNacimiento").innerHTML = "Fecha de nacimiento: " + fechaN;
        document.getElementById("genero").innerHTML = "Género: " + genero;
        document.getElementById("latitud").innerHTML = "Latitud: " + latitud;
        document.getElementById("longitud").innerHTML = "Longitud: " + longitud;
        document.getElementById("localidad").innerHTML = "Localidad: " + localidad;
        
    }
)}
