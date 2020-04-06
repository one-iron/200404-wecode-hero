function start(){
    const bg = document.getElementById("bg");
    const ghostDiv = document.getElementsByClassName("ghostFront");
    let heroDiv = document.querySelector(".front");
    let ghostKill = 0;
    let ghostCount = 0;
    
    let ghostStart = setInterval(makingGhost, 1500);
    function makingGhost(){

        //고스트 클래스를 만들고, x축 랜덤 설정, y축 0 설정하여 bg 아이디에 추가
        const ghost = document.createElement("Div");
        ghost.className = "ghostFront";
        ghost.style.left = Math.floor(Math.random() * 755) + "px";
        ghost.style.top ="0px";
        document.getElementById("bg").appendChild(ghost);
    
        
        //고스트를 움직이고, 죽이는 것을 반복하는 함수 입니다.
        let ghostPosition = setInterval(movingGhost,100);
        let ghostTopNum = 0;

        function movingGhost(){
            const killCount = document.getElementsByClassName("killCount")[0];
            const saveCount = document.getElementsByClassName("ghostCount")[0];

            //hero left 정확한 값을 가져오지 못해서 css style left로 접근해서 px을 없애고, 숫자만 가져왔습니다.
            let leftStyle = document.getElementById("location").style.left;
            let heroLeft = leftStyle.slice(0,leftStyle.indexOf('px')) * 1;
            
            //0.1초마다 y축 5px추가하여 내려가게 하기
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
        }
    }
}