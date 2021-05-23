var tela = document.getElementById("estabelecimento");
var b = document.body;
tela.style.visibility = "hidden";
let scrren = screen.width
let imgClose = document.getElementById('menuClose')
let img = document.getElementById("menuOpen")
let menuop = document.querySelector('.menu')
if (scrren > 420) {
  imgClose.style.visibility = 'hidden'
  img.style.visibility = 'hidden'
}

var dados = {0 : {nome : "SupermerCaju", area : "1000m²", capacidade : "440", funcionarios : "25", presentes : "200",         situacao :                "Nível de aglomeração aceitável"},
             
             1 : {nome : "Nagy Confecções", area : "600m²", capacidade : "265", funcionarios : "15", presentes : "100", situacao : "Nível de aglomeração aceitável"},
             
             2 : {nome : "Zé's Bar e Restaurante", area : "400m²", capacidade : "175", funcionarios : "20", presentes : "160", situacao : "Nível de aglomeração extrapolado"},
             
             3 : {nome : "Churrascaria do Beto", area : "250m²", capacidade : "110", funcionarios : "15", presentes : "100", situacao : "Nível de aglomeração extrapolado"},
             
             4 : {nome : "Caju's Mall", area : "5000m²", capacidade : "2200", funcionarios : "100", presentes : "1700", situacao : "Nível de aglomeração aceitável"}
}

function abrir_tela(cod){
  b.style.visibility = 'hidden'
  tela.style.visibility = "visible";

  var estabelecimento = dados[cod]["nome"];
  var area = dados[cod]["area"];
  var capacidade = dados[cod]["capacidade"];
  var funcionarios = dados[cod]["funcionarios"];
  var presentes = dados[cod]["presentes"];
  var situacao = dados[cod]["situacao"];
  
  var nome = document.getElementById("nome");
  var are = document.getElementById("area");
  var cap = document.getElementById("capacidade");
  var fun = document.getElementById("funcionarios");
  var pre = document.getElementById("presentes");
  var sit = document.getElementById("situacao");
  nome.innerHTML = estabelecimento;
  are.innerHTML = "<b>Aréa do estabelecimento:</b>     " + area + ".";
  cap.innerHTML = "<b>Capacidade:</b>     " + capacidade + " pessoas.";
  fun.innerHTML = "<b>Funcionários:</b>     " + funcionarios + ".";
  pre.innerHTML = "<b>Pessoas no local:</b>     " + presentes + ".";
  sit.innerHTML = "<b>Situação atual do estabelecimento:</b>     " + situacao + ".";
}

function fechar_tela(){
  b.style.visibility = 'visible'
  tela.style.visibility = "hidden";
}

let openMunu = () => {
  menuop.classList.add('mopen')
  img.style.visibility = 'hidden'
  imgClose.style.visibility = 'visible'
}

let closeMenu = () => {
  menuop.classList.remove('mopen')

  scrren > 420 ? img.style.visibility = 'hidden' : img.style.visibility = 'visible'
}


