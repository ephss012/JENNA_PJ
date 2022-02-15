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
        let titBx = document.querySelector(".cont1");

        // (5) PARKS MANAGEMENT 글자 흐르기
        let comp = document.querySelector('.cont2');

        let winH = window.innerHeight / 2;



        /////// 스크롤 액션 구역 ///////////////
        window.addEventListener("scroll", () => {

            // 스크롤 위치값
            scTop = this.scrollY;
            console.log("스크롤위치:", scTop);

            // 타이틀 글자 움직이기
            if (scTop < 50) {
                titBx.style.left = "0";
            } else if (scTop < 200) {
                titBx.style.left = "-50%";
            } else if (scTop < 400) {
                titBx.style.left = "-80%";
            } else if (scTop < 500) {
                titBx.style.left = "-100%";
            }

            // PARKS MANAGEMENT 움직이기
            if (scTop < 4120) {
                comp.style.left = '0';
            } else if (scTop < 4250) {
                comp.style.left = '-40%';
            } else if (scTop < 4400) {
                comp.style.left = '-70%';
            } else if (scTop < 4600) {
                comp.style.left = '-100%';
            }



        }); ////////////// scroll //////////////////



        // 하위메뉴 - smenu 마우스 오버 시 펼침
        window.addEventListener('DOMContentLoaded',
            function (){
                let smenu = document.querySelectorAll('.smenu');

                for (let x of smenu) {

                    // 마우스 오버
                    x.onmouseover = () => {

                        // smenu - Artist 하위요소
                        let tg = x.querySelector('div');
                        // 아티스트 이름 2개
                        let hv = tg.querySelector('ol').offsetHeight;

                        // smenu 펼치기
                        tg.style.height = (hv + 10) + 'px';
                        tg.style.transition = 'height .4s ease-out';
                    }; // 마우스 오버 ////

                    x.onmouseout = () => {
                        let tg = x.querySelector('div');
                        tg.style.height = '0';
                    }; // 마우스 아웃 ////

                } // for of ////
                
            })


        // 컨텐츠2 잡지 이미지 6개  //////////////////////
        window.addEventListener('load',()=>{
    
            console.log("로딩완료!");

            // 이미지 번호
            let num = 1;

            // 잡지 이미지
            let tg = document.querySelector(".pics img");

            // 스크롤 시 잡지 이미지 변경
            const chgImg = gubun => {
                console.log("매거진!", gubun);

                tg.setAttribute('src', `./images/pics${num}.jpg`)
            }

        })


    }); /////////////// load /////////////////////////