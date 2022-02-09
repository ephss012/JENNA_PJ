window.addEventListener("DOMContentLoaded",
    () => {
        console.log('로딩완료');

        /// 부드러운 스크롤 호출!(제이쿼리 아님!)
        startSS();

        // (1) 스크롤 위치값
        let scTop;
        // (2) 스크롤 등장요소 위치값
        let scPos = []; // 배열변수
        // (3) 스크롤 등장요소
        let scAct = document.querySelectorAll(".scAct");

        // (4) 타이틀 박스
        let titBx = document.querySelector(".cont");

        // 
        let comp = document.querySelector('.comp');

        /////// 스크롤 액션 구역 ///////////////
        window.addEventListener("scroll",()=>{

            // 스크롤 위치값
            scTop = this.scrollY;
            console.log("스크롤위치:",scTop);

            // 타이틀 글자 움직이기
            if(scTop < 50){
                titBx.style.left = "0";
            }
            else if(scTop < 200){
                titBx.style.left = "-50%";
            }
            else if(scTop < 400){
                titBx.style.left = "-80%";
            }
            else if(scTop < 500){
                titBx.style.left = "-100%";
            }

            else if(scTop < 3240){
                comp.style.left = '-100%';
            }

            

        }); ////////////// scroll //////////////////
        ////////////////////////////////////////////



    }); /////////////// load /////////////////////////