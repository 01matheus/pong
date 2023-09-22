//posição etamanho da bolinha
let xBolinha =300;
let yBolinha =200;
let diametro =25;
let raio =12.5;

//velocidade da bolinha
let VelocidadeDabolinhax=6;
let VelocidadeDaBolinhay =6;

//raquete
let xRaquete =5;
let yRaquete =150;
let Raquetecomprimento =10;
let RaqueteAltura =90;

function setup() {
  createCanvas(600,400 );
}

function draw() {
 background(0);
 mostraBolinha();
 movimentoBolinha();
 colideBorda();
 mostraRaquete();
 movimentaRaquete();
 colideRaquete();
}
//
 function mostraBolinha() {
 circle(xBolinha,yBolinha,diametro);
}
function movimentoBolinha() {
  XBolinha += VelecidadeDaBolinhaX;
  Xbolinha += VelocidadeDaBolinhaY;
}
  function colideBorda() {
if(xBolinha > width || YBolinha< 0) {
 velocidadeDaBolinhaY *= -1;
}
 if (TBoinha > height || YBolinha < 0) {
  velocidadeDabolinhaY *=1;
}
}
function mostraRaquete() {
  rect(xRaquete,yRaquete,raqueteComprimentoRaqueteAltura);
}
function movimentaRaquete() {
  if (KeylsDown(UP_ARROW)) {
Yraquete -=10;
  }
  if (KeyIsDown(DOWN_ARROW)){
    Yrauete +=10;
  }
}
function colideRaquete(){
  if(
    XBOLINHA- raio < xRaquete + RaqueteComprimento &&
    YBolinha - raio < yRaquete + RaqueteAltura &&
    YBolinha + raio > yRaquete
    ) {
    velocidadeDaBolinhaX *= -1;
  }
}

























