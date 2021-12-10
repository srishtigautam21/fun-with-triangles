var inputAngle=document.querySelectorAll(".input-angle");
var btntriangle=document.querySelector("#is-triangle-button");
var outputE1=document.querySelector(".output");

function calculateAngleSum(angle1,angle2,angle3)
{
    var sumOfAngle=angle1+angle2+angle3;
    return sumOfAngle;
}

function isAngleTriangle()
{
    if(Number(inputAngle[0].value)<=0 || Number(inputAngle[1].value)<=0 || Number(inputAngle[2].value)<=0)
    {
        outputE1.style.display="block";
        outputE1.innerText="The angles should be greater than zero";
    }
    else{
        var sumOfAngle=calculateAngleSum(Number(inputAngle[0].value),Number(inputAngle[1].value),Number(inputAngle[2].value)); //how to select individual rows with query selectorall
        if(sumOfAngle===180)
        {
            outputE1.innerText="Yay the angles form a triangle";
        }
        else{
            outputE1.innerText="The angles do not form a triangle";
        }

    }
    
}   

btntriangle.addEventListener("click",isAngleTriangle);