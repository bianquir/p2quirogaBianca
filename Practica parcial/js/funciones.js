
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
       

        localidades.forEach(function(element){
            if (element.provincia.id === id){
                nombreProvincia= element.provincia.nombre;
                cantidadMunicipios++;
            }  
        });
        if (nombreProvincia !== "no identificada") {
            document.getElementById("nombre").innerHTML = ("provincia : " + nombreProvincia);
            document.getElementById("municipio").innerHTML = ("cantidad de municipios : " + cantidadMunicipios);

        }else{
            document.getElementById("nombre").innerHTML= "Id no identificado";
            document.getElementById("municipio").innerHTML= ""; 
        }

    })
}