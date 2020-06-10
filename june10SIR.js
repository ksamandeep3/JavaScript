function a(start, end, stepNo){
var sum = 0;
var currentNo = start;
while(currentNo>end)
{

    sum +=stepNo;
    currentNo -= stepNo;
}
return(sum);
}

console.log("<h1>sum is ", a(1000,100,17), "</h1>")