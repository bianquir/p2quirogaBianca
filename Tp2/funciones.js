function getCharacter() {
    const input = document.querySelector('input[type="text"]');
    const id = input.value;

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        const name = document.getElementById('name');
        const status = document.getElementById('status');
        const species = document.getElementById('especies');
        const location = document.getElementById('location');
        const avatar = document.getElementById('avatar');

        name.value = data.name;
        status.value = data.status;
        species.value = data.species;
        location.value = data.location.name;
        avatar.src = data.image;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
