let hero = document.getElementById("location");
let test = setInterval(makingGhost, 300);

function makingGhost(){
    //ghost 만들기
    let ghost = document.createElement("Div");
    ghost.className = "ghostFront";
    ghost.style.left = Math.floor(Math.random() * 755) + "px";
    ghost.style.top ="0px";
    document.getElementById("bg").appendChild(ghost);

    let num = 0;
    let ghostPosition = setInterval(movingGhost,1000);
    //ghost 떨어트리기
    function movingGhost(){
        let leftStyle = document.getElementById("location").style.left;
        let heroLeft = leftStyle.slice(0,leftStyle.indexOf('px')) * 1;
        ghost.style.top = `${num+=30}px`;
    //ghost 떨어트리기        
        if(ghost.offsetTop > 480 && ghost.offsetLeft - 50 < heroLeft && heroLeft < ghost.offsetLeft + 50){
            ghost.className = "ghostDie";
            clearInterval(ghostPosition);
        }
        else if(ghost.offsetTop > 520){
            ghost.className = "";
            clearInterval(ghostPosition);
        }
    }


}



/*
function movingGhost(){
    let num = 0;
    let ghostPosition = setInterval(ghostRain,300);

    function ghostRain(){
        let leftStyle = document.getElementById("location").style.left;
        let heroLeft = leftStyle.slice(0,leftStyle.indexOf('px')) * 1;
        ghost.style.top = `${num+=30}px`;
        
        if(ghost.offsetTop > 480 && ghost.offsetLeft - 50 < heroLeft && heroLeft < ghost.offsetLeft + 50){
            ghost.className = "ghostDie";
            clearInterval(ghostPosition);
        }
        else if(ghost.offsetTop > 520){
            ghost.className = "";
            clearInterval(ghostPosition);
        }
    }


}
*/





/*
function makingGhost(){
    ghost.className = "ghostFront";
    ghost.style.left = Math.floor(Math.random() * 755) + "px";
    ghost.style.top ="0px";
    document.getElementById("bg").appendChild(ghost);
    movingGhost();
}
*/