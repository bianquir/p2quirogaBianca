
function obtenerDatos(){
    const input = document.getElementById('entrada');
    const id = input.value;

    fetch('./resources/asentamientos.json')
    .then(function(response){
        return response.json()
    })
    .then (function(data){
    
        const localidades = (data.localidades);
        let nombreProvincia = "no identificada";
        let cantidadMunicipios = 0;
        let nombreLocalidad = [];
       

        localidades.forEach(function(element){
            if (element.provincia.id === id){
                nombreProvincia= element.provincia.nombre;
                cantidadMunicipios++;
                nombreLocalidad.push(element.nombre);

            }  
        });
        if (nombreProvincia !== "no identificada") {
            document.getElementById("nombre").innerHTML = ("Provincia : " + nombreProvincia);
            document.getElementById("municipio").innerHTML = ("Cantidad de municipios : " + cantidadMunicipios);
            document.getElementById("nombreM").innerHTML=("Nombre de los municipios: "+ nombreLocalidad );

        }else{
            document.getElementById("nombre").innerHTML= "Id no identificado";
            document.getElementById("municipio").innerHTML= ""; 
            document.getElementById("nombreM").innerHTML="";
        }

    })
}