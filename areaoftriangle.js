var sideInput=document.querySelectorAll(".input-side");
var areaButton=document.querySelector("#area-button");
var output=document.querySelector("#output");


function calculateAreaOfTriangle()
{
    var a= Number(sideInput[0].value);
    var b= Number(sideInput[1].value);
    var area=0.5*(a*b);
    output.innerText="The area of triangle is " + area;


}

areaButton.addEventListener("click",calculateAreaOfTriangle);