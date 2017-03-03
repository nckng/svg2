var canvas = document.getElementById("canvas");
var circle = document.getElementById("circle");
var dvd = document.getElementById("dvd");
var stop = document.getElementById("stop");
var rid;
var height = canvas.getBoundingClientRect().height;
var width = canvas.getBoundingClientRect().width;

var drawcircle = function(r){
    var ins = document.createElementNS("http://www.w3.org/2000/svg","circle");
    ins.setAttribute("cx",width/2);
    ins.setAttribute("cy",height/2);
    ins.setAttribute("r",r);
    ins.setAttribute("fill","orchid");
    canvas.appendChild(ins);
}

var drawdvd = function(a,b){
    var ins = document.createElementNS("http://www.w3.org/2000/svg",'image');
    ins.setAttribute('height','250');
    ins.setAttribute('width','600');
    ins.setAttribute('href','download.png');
    ins.setAttribute('x',a);
    ins.setAttribute('y',b);
    ins.setAttribute('visibility','visible');
    canvas.appendChild(ins);
};

var clearscreen = function(){
    canvas.innerHTML = "";
}
var stopit = function(e){
    window.cancelAnimationFrame(rid);
};

var animation1 = function(e){
    var r = 1;
    var growing = true;
    window.cancelAnimationFrame(rid);
    var trans = function(){
	if (r==0 || r==width/2){
	    growing = !growing;
	};
	clearscreen();
	drawcircle(r);
	if (growing){
	    r++;
	}
	else{
	    r--;
	};
	rid = window.requestAnimationFrame(trans);
    };
    trans();
};

var animation2 = function(e){
    var x = Math.floor((Math.random()*(width-250)+1))-175;
    var y = Math.floor((Math.random()*(height-250)+1))-70;
    var xv = 1;
    var yv = 1;
    window.cancelAnimationFrame(rid);
    var trans = function(){
	if (x == -175 || x == 75){
	    xv = -xv;
	};
	if (y == -70 || y == 320){
	    yv = -yv
	};
	clearscreen();
	drawdvd(x,y);
	x = x+xv;
	y = y+yv;
	rid = window.requestAnimationFrame(trans);
    };
    trans();
};

//drawdvd(-175,-70);
//drawdvd(75,320);
circle.addEventListener("click", animation1);
stop.addEventListener("click", stopit);
dvd.addEventListener("click",animation2);	
