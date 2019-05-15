let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
//oren
context.beginPath();
context.arc(70,160,40,0,2*Math.PI);
context.fillStyle = "#ffeda8";
context.fill();
context.closePath();
context.stroke();
//oren
context.beginPath();
context.arc(330,160,40,0,2*Math.PI);
context.fillStyle = "#ffeda8";
context.fill();
context.closePath();
context.stroke();
//body
context.beginPath();
context.arc(200,200,150,0,2*Math.PI);
context.fillStyle = "#ffeda8";
context.fill();
context.stroke();
//oog
context.beginPath();
context.arc(130,130,40,0,2*Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();
//oog
context.beginPath();
context.arc(270,130,40,0,2*Math.PI);
context.fillStyle = "white";
context.fill();
context.closePath();
context.stroke();
//oogzwart
context.beginPath();
context.arc(130,140,15,0,2*Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();
//oogzwart
context.beginPath();
context.arc(270,140,15,0,2*Math.PI);
context.fillStyle = "black";
context.fill();
context.closePath();
context.stroke();
//neus
context.moveTo(210,140);
context.lineTo(170,220);
context.stroke();

context.moveTo(210,220);
context.lineTo(170,220);
context.stroke();

//mond
context.beginPath();
      context.arc(200, 250, 70, 0, Math.PI, false);
      context.closePath();
      context.lineWidth = 5;
      context.fillStyle = 'red';
      context.fill();
      context.strokeStyle = '#550000';
      context.stroke();

//haar //left up right down
context.moveTo(150,30);
context.lineTo(160,55);
context.stroke();

context.moveTo(125,30);
context.lineTo(140,65);
context.stroke();

context.moveTo(240,30);
context.lineTo(230,55);
context.stroke();

context.moveTo(280,30);
context.lineTo(260,65);
context.stroke();

context.moveTo(200,20);
context.lineTo(200,50);
context.stroke();

//snor
context.moveTo(150,240);
context.lineTo(200,230);
context.stroke();

context.moveTo(250,240);
context.lineTo(200,230);
context.stroke();
