var listaAnimesFavoritos = [];
var listaAberturasAnimesFavoritos = [];

function adicionarAnime(){
  var animeFavorito = document.getElementById('anime').value;
  var aberturaAnimeFavorito = document.getElementById('abertura').value;
  
    if(( animeFavorito.endsWith('jpg') ) || ( animeFavorito.endsWith('jpeg') )){
      
      document.getElementById('mensagemDeErro').innerHTML = '';
      listaAnimesFavoritos.push(animeFavorito);
      listaAberturasAnimesFavoritos.push(aberturaAnimeFavorito);
      
      limpaCampos();
      recarregarAnimes();
      
    } else {
      
      document.getElementById('mensagemDeErro').innerHTML = 'Endereço de imagem inválido, tente novamente';
      limpaCampos();
      
    }
  }

function recarregarAnimes(){
 
  var elementoListaAnimes = document.getElementById('listaAnimes');
  elementoListaAnimes.innerHTML = '';
  for(i=0; i < listaAnimesFavoritos.length ; i++){
    elementoListaAnimes.innerHTML += `<a href=" ${listaAberturasAnimesFavoritos[i]} "><img src=" ${listaAnimesFavoritos[i]} "></a>`;
    
  }
}

function limpaCampos(){
   document.getElementById('anime').value = '';
   document.getElementById('abertura').value = '';
}
