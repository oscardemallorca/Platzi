var dibujo1, dibujo2, lienzo1, lienzo2;
function inicio(){
  dibujo1 = document.getElementById("dibujito1");
  dibujo2 = document.getElementById('dibujito2');
  lienzo1 = dibujo1.getContext("2d");
  lienzo2 = dibujo2.getContext("2d")

  dibujarGrilla1(lienzo1);
  dibujarGrilla2(lienzo2);
  dibujarCirculo1(lienzo1);
  dibujarCirculo2(lienzo2);
  rellenarCirculo2(lienzo2);
}

function dibujarGrilla1(L1) {
  var ancho = 300, alto =300;
  var linea, punto;
  var anchoLinea = 30;
  var limiteX = ancho / anchoLinea;
  var limiteY = alto / anchoLinea;

  L1.strokeStyle = "#aaa";

  for(linea = 0; linea <= 10; linea++)
  {
    punto = linea * anchoLinea;
    L1.beginPath();
    L1.moveTo(punto, 0);
    L1.lineTo(punto, ancho);
    L1.stroke();
    L1.closePath();
  }

  for(linea = 0; linea <= 10; linea++)
  {
    punto = linea * anchoLinea;
    L1.beginPath();
    L1.moveTo(0, punto);
    L1.lineTo(alto, punto);
    L1.stroke();
    L1.closePath();
  }
}

function dibujarGrilla2(L2) {
  var ancho2 = 300, alto2 =300;
  var linea2, punto2;
  var anchoLinea2 = 30;

  L2.strokeStyle = "#aaa";

  for(linea2 = 0; linea2 <= 20; linea2++)
  {
    punto2 = linea2 * 30;
    L2.beginPath();
    L2.moveTo(punto2, 0);
    L2.lineTo(0, punto2);
    L2.stroke();
    L2.closePath();
  }

  for(linea2 = 0; linea2 <= 30; linea2++)
  {
    punto2 = linea2 * 30;
    L2.beginPath();
    L2.moveTo(0, ancho2-punto2);
    L2.lineTo(punto2, alto2);
    L2.stroke();
    L2.closePath();
  }
}

function dibujarCirculo1 (L1) {
  L1.beginPath();
  L1.strokeStyle = "#00f";
  L1.arc(150,150,100,(Math.PI*2),false);
  L1.closePath();
  L1.stroke();
}

function dibujarCirculo2 (L2) {
  L2.beginPath();
  L2.strokeStyle = "#00f";
  L2.arc(150,150,100,(Math.PI*2),false);
  L2.closePath();
  L2.stroke();
}

function rellenarCirculo2 (L2) {
//Hay otras formas de rellenar pero he querido
//utilizar un "for" para practicar
  var circulo2;
  for(circulo2 = 100; circulo2 >= 0; circulo2-- )
  {
    L2.beginPath();
    L2.strokeStyle = "#eee";
    L2.arc(150,150,circulo2,(Math.PI*2),false);
    L2.closePath();
    L2.stroke();
  }
}