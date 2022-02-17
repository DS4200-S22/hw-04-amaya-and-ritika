
// function 1 -- counting number of clicks on circle 1


 function ClickCounter()
 {
    let a = document.getElementById("number").textContent;
    let click = Number(a) + 1;
    document.getElementById("number").textContent = String(click);
}

const circle1 = document.getElementById("circle1");
circle1.addEventListener('click', ClickCounter);


// function for circle 3

document. getElementById('circle3').onclick = (event) => {
    const curElement = event.target;
    const { opacity } = curElement.style;
    if ( !opacity || opacity === "1") {
        curElement.style.opacity = "0";
    } else {
        curElement.style.opacity = "1";
    }
}



/*

// function for circle2 -- adding and removing black border from circle

function AddBorder()
{
    document.getElementById("circle2").classList.add("border: solid");
}

// const circle2 = document.getElementById("circle2");
circle2.addEventListener('mouseover', AddBorder); //mouse over

function RemoveBorder()
{
    document.getElementById("circle2").classList.remove("border: solid");
}

// const circle2 = document.getElementById("circle2");
circle2.addEventListener('mouseout', RemoveBorder); // mouse out 

*/ 




