// Functionize Minecraft Fishing Start Code

let resultImg = document.getElementById("result-img")
let numSalmonSpan = document.getElementById("num-salmon")
let numCodSpan = document.getElementById("num-cod")
let numpufferSpan = document.getElementById("num-puffer")
let numTropicalSpan = document.getElementById("num-tropical")

let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  let random = Math.random() ;
  let character = document.getElementById("character-select").value
  
if (character === "steve"){
if(random < .7){
    resultImg.src = "img/Raw-Cod.png" 
    numCod++
    numCodSpan.innerHTML = numCod
  } else if(random < .9){
    resultImg.src = "img/Raw-salmon.png"
    numSalmon++
    numSalmonSpan.innerHTML = numSalmon
  } else if(random < .95){
    resultImg.src = "img/Tropical-Fish.png"
    numTropical++
    numTropicalSpan.innerHTML = numTropical
  } else {
    resultImg.src = "img/Pufferfish.png"
    numPuffer++
    numpufferSpan.innerHTML = numPuffer
  }
} else if(character ==="alex"){
if(random < .1){
    resultImg.src = "img/Raw-Cod.png" 
    numCod++
    numCodSpan.innerHTML = numCod
  } else if(random < .2){
    resultImg.src = "img/Raw-salmon.png"
    numSalmon++
    numSalmonSpan.innerHTML = numSalmon
  } else if(random < .5){
    resultImg.src = "img/Tropical-Fish.png"
    numTropical++
    numTropicalSpan.innerHTML = numTropical
  } else {
    resultImg.src = "img/Pufferfish.png"
    numPuffer++
    numpufferSpan.innerHTML = numPuffer
  }
} else if(character ==="villager"){
  if(random < .25){
      resultImg.src = "img/Raw-Cod.png" 
      numCod++
      numCodSpan.innerHTML = numCod
    } else if(random < .5){
      resultImg.src = "img/Raw-salmon.png"
      numSalmon++
      numSalmonSpan.innerHTML = numSalmon
    } else if(random < .75){
      resultImg.src = "img/Tropical-Fish.png"
      numTropical++
      numTropicalSpan.innerHTML = numTropical
    } else {
      resultImg.src = "img/Pufferfish.png"
      numPuffer++
      numpufferSpan.innerHTML = numPuffer
    }
  
  }

}
