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
    if(Number(base.value)<=0 || Number(height.value)<=0)
    {
        output.style.display="block";
        output.innerText="The length of sides should be greater than zero";
    }
    else{
        var sumofsquare=calculatesumofsquare(Number(base.value),Number(height.value));
        var hypotenuse=Math.sqrt(sumofsquare);
        output.innerText="The length of hypotenuse is " + hypotenuse;

    }

    
}

button.addEventListener("click",calculateHypotenuse);