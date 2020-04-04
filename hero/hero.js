let heroLocation = document.getElementById("location");
let heroDiv = document.querySelector(".front");
let heroX = 400;

window.addEventListener('keyup', function(e){
    // 왼쪽 버튼을 누르고 히어로 위치가 끝이면 움직이지 않게, 끝이 아니면 20을 뺀 위치로
    if(e.keyCode === 37 || e.keyCode === 36){
        if(heroX === 20 || e.keyCode === 36){
            heroDiv.className = "left";
            heroX = 20;
            heroLocation.style.left = "20px";
        }
        else{
            heroDiv.className = "left";
            heroX = heroX - 20;
            heroLocation.style.left = `${heroX}px`;
        }
    }
    // 오른쪽 버튼을 누르고 히어로 위치가 끝이면 움직이지 않게, 끝이 아니면 20을 더한 위치로
    else if(e.keyCode === 39 || e.keyCode === 35){
        if(heroX === 780 || e.keyCode === 35){
            heroDiv.className = "right";
            heroX = 780;
            heroLocation.style.left = "780px";   
        }
        else {
            heroX = heroX + 20
            heroDiv.className = "right";
            heroLocation.style.left = `${heroX}px`;
        }
    }

    // 아래쪽 버튼을 누르면 정면 이미지 클래스로 전환
    else if(e.keyCode === 40){
        heroDiv.className = "front";
    }
})