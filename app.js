function button() {
  //pegar o html
  let html = document.documentElement
  // Pegar a tag img
  let img = document.querySelector("#profile img")

  //Podemos fazer usando o parametro toggle!
  // html.classList.toggle('light')
  
  if(html.classList.contains('light')) {
    //Se tiver sem light mode, manter a imagem 
    html.classList.remove('light')
     img.setAttribute("src", "./assets/avatar.png")
    //Substituir a imagem
  } else {
    //Se tiver light mode, adicionar a imagem light
    html.classList.add('light')
    img.setAttribute('src', './assets/avatar-light.png')
  }

  

   
  
  
  

}