var total = 0;
var clickers = 0;



function buttonClick(number) 
{
	total = total + number;
	document.getElementById("total").innerHTML = total;
}

function buyClicker() {
	var clickerCost = Math.floor(10 * Math.pow(1.1,clickers));
	if(total >= clickerCost) {
		clickers = clickers + 1;
		total = total - clickerCost;
		document.getElementById("clickers").innerHTML = clickers;  
		document.getElementById("total").innerHTML = total;  
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,clickers));
	document.getElementById("clickerCost").innerHTML = nextCost;
}

function save() {
	var save = {
		total: total,
		clickers: clickers
	}
	localStorage.setItem("save",JSON.stringify(save)); 
}

function load() {
	var savegame = JSON.parse(localStorage.getItem("save")); 
	if (typeof savegame.total !== "undefined") total = savegame.total; 
	if (typeof savegame.clickers !== "undefined") clickers = savegame.clickers; 
}

function deleteSave() {
	localStorage.removeItem("save");
}

window.setInterval(function(){
	buttonClick(clickers);
}, 1000);

