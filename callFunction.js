//reinforce the idea of that in a loop(for or while)
//we can put calls to functions in the execution context
//example is here


// for(ec ; evaluation context; execution context )
// {

// }

function a() {return 0; }
function b() {}
function keepgoing(){return true; }

//for loop
// for(a(); keepgoing; b())
// {
//     console.log("happy");
// }
let counter = 0;
function jimmy(){
    return counter++;
    if (counter<10){return false;}
    return true;
}
while(jimmy()){
    console.log(jimmy);
}