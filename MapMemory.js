//excercise to demonstrate the use of MSC debugger and
//the construction of a memory map!

//you use debugger for 2 things:
//(1)Examine the value of variables
//(2)Trace the flow of control, or the flow of execution

//STEP 1: Lets write a simple program!

//STEP2: use the debugger: We always begin with putting
//breakpoints a break is a line of code  at which the debugger
// will pause and then you can:examine the variable and expression values


var a, b, c;
let x,y,z;
a=1;
a++;
b=2;
b--;
c=3;

for(;a>b++;)
{
//console.log("sum is " + a++ + b++);
}