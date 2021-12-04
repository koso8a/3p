
var a = 5,b = 6;
var c = 25;
var array= new Array();

for(i=0; i<100000; i++){
    array.push((Math.random()*100).toFixed());
}
console.log(array);

insertAt(a,c);
remove(b);

function insertAt(a,c){
    array.splice(a,0,c);
    console.log(array);
}

function remove(b){
    array.splice(b,1);
    console.log(array);
}
