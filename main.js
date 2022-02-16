
// function 1 -- counting number of clicks on circle 1
function ClickCounter()
{
    let a = document.getElementById("number").textContent;
    let click = Number(a) + 1;
    document.getElementById("number").textContent = String(click);

}

const circle1 = document.getElementById("circle1");
circle1.addEventListener('click', ClickCounter);


// function 2 -- adding black border to circle 2 on mouseover 

// define 2 functions -- hover over + add border
// mouse out - removes the border 

// class list to add a border 

function AddBorder()
{

document.getElementById("circle2").classList.add() //AddBorder - and color 

}

const circle2 = document.getElementById("circle2");
circle2.addEventListener("mouseover", AddBorder); 


function RemoveBorder()

{


}
// mouseover and mouseout (move out of the circle we want border gone)


// function 3 -- 