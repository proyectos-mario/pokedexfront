const searchPokemon=async () => {

    nPokemon = document.getElementById("nPokemon")
    console.log('nPokemon',nPokemon)
    const response = await fetch('http://localhost:5000/pokemon?id='+nPokemon.value);
    console.log(response)
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson)

    
    var name = document.createElement("h1");
    var t = document.createTextNode(myJson.name.toUpperCase());
    name.appendChild(t);

    const listItem = document.querySelector(".name h1");
    listItem.parentNode.replaceChild(name, listItem);
   
    var img = document.createElement("img");
    img.src = myJson.image;

    const listItem2 = document.querySelector(".img img");
    listItem2.parentNode.replaceChild(img, listItem2);
    
  }

