let heroLocation = document.getElementById("location");
let heroDiv = document.querySelector(".front");
let heroX = 383;

window.addEventListener('keydown', function(e){

    // 왼쪽 버튼(37)을 누르고 히어로 위치가 끝(40)이면 움직이지 않게, 끝이 아니면 40을 뺀 위치로
    if(e.keyCode === 37){
        if(heroX === 3){
            heroDiv.className = "left";
            heroLocation.style.left = `${heroX}px`;
        }
        else{
            heroDiv.className = "left";
            heroX = heroX - 10;
            heroLocation.style.left = `${heroX}px`;
        }
    }
    // 오른쪽 버튼(39)을 누르고 히어로 위치가 끝(760)이면 움직이지 않게, 끝이 아니면 40을 더한 위치로
    else if(e.keyCode === 39){
        if(heroX === 763){
            heroDiv.className = "right";
            heroLocation.style.left = `${heroX}px`;   
        }
        else {
            heroX = heroX + 10
            heroDiv.className = "right";
            heroLocation.style.left = `${heroX}px`;
        }
    }

    // 아래쪽 버튼을 누르면 정면 이미지 클래스로 전환
    else if(e.keyCode === 40){
        heroDiv.className = "front";
    }
    else if(e.keyCode === 38){
        heroDiv.className = "back";
    }
})