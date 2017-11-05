var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
console.log(text);	
var	dinosaur = 'triceratops',
	step1 = dinosaur.toUpperCase();
console.log(step1);
var change = text.replace('Velociraptor', step1);
console.log(change);

var breakpoint = change.length/2,
	halfChange = change.slice(1,breakpoint);
console.log(change.length/2);
console.log(change.slice(0,breakpoint));

