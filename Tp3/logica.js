function getPerson(){
    fetch('https://randomuser.me/api/')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let genero = (data.results[0].gender)
        let fechan = (data.results[0].dob.date)  
        let location = (data.results[0].location.city)      
        let coordinates = (data.results[0].location.coordinates)
        let name = (data.results[0].name.first)

        console.log(genero)
        console.log (fechan)
        console.log (location)
    })
}

