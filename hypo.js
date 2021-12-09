var base=document.querySelector("#base");
var height=document.querySelector("#height");
var button=document.querySelector("#hypotenuse-btn");
var output=document.querySelector("#output");
 
function calculatesumofsquare(a,b)
{
    var sumOfSquare=a*a+b*b;
    return sumOfSquare;
}

function calculateHypotenuse()
{
    var sumofsquare=calculatesumofsquare(Number(base.value),Number(height.value));
    
    var hypotenuse=Math.sqrt(sumofsquare);
    output.innerText="The length of hypotenuse is " + hypotenuse;
}

button.addEventListener("click",calculateHypotenuse);