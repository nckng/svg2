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

circle.addEventListener("click", animation1);
stop.addEventListener("click", stopit);
	
