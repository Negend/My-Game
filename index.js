$(start)
var wires = ['red','yellow','pink','blue','orange','purple','white','black','green']
var choice;
var coloring=[]
var playerColoring = []
var x;
var n =3
function start (){


colorChoice()
colorSequence()



function colorChoice (){
	$('.wire').each(function(i,name){
		$(this).click(function(event){
			console.log(wires[i])
			choice = wires[i]
			playerColoring.push(wires[i])
			console.log(playerColoring)
		})
	})

}

function colorSequence(){
	for(var i = 0; i < n; i++){
		randomizer(wires.length)
		coloring.push(wires[x])
		console.log(coloring)
	}
}






function randomizer(r){
	x = Math.floor(Math.random()*r)
}






























}