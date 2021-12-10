var sideInput=document.querySelectorAll(".input-side");
var areaButton=document.querySelector("#area-button");
var output=document.querySelector("#output");


function calculateAreaOfTriangle()
{
    var a= Number(sideInput[0].value);
    var b= Number(sideInput[1].value);
    if(a<=0 || b<=0)
    {
        output.style.display="block";
        output.innerText="The length of sides should be greater than zero";
    }
    else{
        var area=0.5*(a*b);
        output.innerText="The area of triangle is " + area;

    }
    


}

areaButton.addEventListener("click",calculateAreaOfTriangle);