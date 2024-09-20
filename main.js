let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

//retangulo principal fundo canvas
pincel.fillStyle = 'white';
pincel.fillRect(0,0,600,400);

//retangulo 1
pincel.fillStyle = 'green';
pincel.fillRect(125,50,350,300);//cabeça

//retangulo 2
pincel.fillStyle = 'black';
pincel.fillRect(340,100,90,90);//olhos

//retangulo 3
pincel.fillStyle = 'black';
pincel.fillRect(180,100,90,90);//olhos

//retangulo 4
pincel.fillStyle = 'black';
pincel.fillRect(270,190,70,100);//nariz

//retangulo 5
pincel.fillStyle = 'black';
pincel.fillRect(340,240,40,110); //boca1

//retangulo 6
pincel.fillStyle = 'black';
pincel.fillRect(230,240,40,110);//boca2