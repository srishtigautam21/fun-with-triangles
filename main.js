var inputAngle=document.querySelectorAll(".input-angle");
var btntriangle=document.querySelector("#is-triangle-button");
var outputE1=document.querySelector(".output");

function calculateAngleSum(angle1,angle2,angle3)
{
    var sumOfAngle=angle1+angle2+angle3;
}

function isAngleTriangle()
{
    var angle=inputAngle[0].value; //how to select individual rows with query selectorall
    
}

btntriangle.addEventListener("click",isAngleTriangle);