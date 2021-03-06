function start(){
    const bg = document.getElementById("bg");
    const ghostDiv = document.getElementsByClassName("ghostFront");
 
    let ghostKill = 0;
    let ghostCount = 0;
    
    
    let ghostStart = setInterval(makingGhost, 200);
    function makingGhost(){
        const ghost = document.createElement("Div");
        let ghostTopNum = 0;
    
        //고스트 클래스를 만들고, x축 랜덤 설정, y축 0 설정하여 bg 아이디에 추가
        ghost.className = "ghostFront";
        ghost.style.left = Math.floor(Math.random() * 755) + "px";
        ghost.style.top ="0px";
        document.getElementById("bg").appendChild(ghost);
    
        //0.1초마다 y축 5px추가하여 내려가게 하기
        let ghostPosition = setInterval(movingGhost,100);
        function movingGhost(){
            let leftStyle = document.getElementById("location").style.left;
            let heroLeft = leftStyle.slice(0,leftStyle.indexOf('px')) * 1;
            const heart = document.getElementsByClassName("heart")[0];
            const killCount = document.getElementsByClassName("killCount")[0];
            const saveCount = document.getElementsByClassName("ghostCount")[0];
    
            ghost.style.top = `${ghostTopNum+=5}px`;
    
            //히어로가 고스트 박스에 중첩하면 고스트가 죽은 이미지로 전환, 죽은 이미지가 1초 후 없어지게 하기, 고스트 킬 카운트 +1
            if(ghost.offsetTop > 480 && 
                ghost.offsetLeft < heroLeft && heroLeft < ghost.offsetLeft + 47 || // 히어로 왼쪽 선 기준으로 고스트 범위 박스 에 들어갈 때
                ghost.offsetTop > 480 && 
                ghost.offsetLeft < heroLeft + 37 && heroLeft + 37 < ghost.offsetLeft + 46 // 히어로 오른쪽 선 기준으로 고스트 범위 박스에 들어갈 때
                ){
                ghost.className = "ghostDie";
                ghostKill++;
                killCount.innerHTML = `죽인 고스트 : ${ghostKill}`;
                setTimeout(function(){
                    ghost.className = ""; }, 1000)
                clearInterval(ghostPosition);
            }
    
            //히어로가 고스트 박스에 중첩되지 않으면 배경이미지 끝 부분에서 해당 엘리먼트를 삭제
            else if(ghost.offsetTop > 540){
                ghostCount++;
                saveCount.innerHTML = `살린 고스트 : ${ghostCount}`;
                bg.removeChild(ghostDiv[0]);
                clearInterval(ghostPosition);
            }
    
            //히어로가 고스트를 죽인 횟수에 따른 하트 게이지 삭제 및 3번 넘으면 게임 종료
            if(ghostKill === 1){
                heart.style.backgroundPosition = "-10px 65px";
            }
            else if(ghostKill === 2){
                heart.style.backgroundPosition = "-10px 30px";
            }
            else if(ghostKill === 3){
                heart.style.display = "none";
                ghostDiv.style.display = "none";
                killCount.innerHTML = `죽인 고스트 : 3`;
                clearInterval(ghostStart);
            }            
        }
    }
}