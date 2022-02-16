
function ClickCounter()
{
    let a = document.getElementById("number").textContent;
    let click = Number(a) + 1;
    document.getElementById("number").textContent = String(click);

}

const circle1 = document.getElementById("circle1");
circle1.addEventListener('clicks', ClickCounter);

