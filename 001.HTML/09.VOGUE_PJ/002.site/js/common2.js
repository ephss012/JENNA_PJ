// 공통 기능 구현 JS - common.js //

///////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",
    () => {
        console.log("로딩완료!");

        /*********************************** 
                    로드구역 전역변수
        ***********************************/
        // (1) 스크롤 위치값
        let scTop;
        // (2) 스크롤 등장요소 위치값
        let scPos = []; // 배열변수
        // (3) 스크롤 등장요소
        let scAct = document.querySelectorAll(".scAct");
        // (4) 보이는 화면의 절반(등장위치보정)
        let winH = window.innerHeight/2;
        // window.innerHeight는 윈도우의 창높이(스크롤미포함)

        /***********************************/
        
        /////////////////////////////////////////////
        /// 페이지 등장요소의 페이지 위치값 셋팅하기 ///
        /////////////////////////////////////////////
        // offsetTop은 선택요소의 맨위로 부터의 top값!
        // for(시작값;한계값;증감){코드}
        for(let i=0; i<scAct.length;i++){
            scPos[i] = scAct[i].offsetTop;
            console.log("페이지위치값",i,"번째:",scPos[i]);
        } ///////// for문 ////////////////////////


        // 변경대상 /////////////////////
        // 상단영역 - #top
        let topA = document.querySelector("#top");
        // 위로가기 버튼 - .tbtn
        let tbtn = document.querySelector(".tbtn");


        ///// 윈도우 스크롤 이벤트 함수 //////
        // 스크롤 이벤트 : scroll
        // window객체에 스크롤이벤트를 걸어준다!(전체스크롤)
        window.addEventListener("scroll", () => {

            // 스크롤 위치값(전역변수 scTop)
            scTop = this.scrollY;
            // scrollY - 세로축 스크롤 위치값 리턴
            // this는 화살표함수에서 window객체를 나타냄

            /************************************************** 
                [윈도우 세로 스크롤 위치값 가져오는 방법]
                1. this.scrollY (this키워드가 window의미)
                2. window.scrollY
                3. document.scrollingElement.scrollTop
                4. document.documentElement.scrollTop
                5. document.querySelector("html").scrollTop

                참고) 가로스크롤일 경우
                    scrollY -> scrollX
                    scrollTop -> scrollLeft
                    로 바꿔서 위와 동일함!

            **************************************************/

            // console.log("스위:",scTop);

            // 변경대상 : 상단영역 - #top -> 전역변수 topA

            //////////////////////////////
            // 상단영역 스크롤 반응하기 ///
            /////////////////////////////

            // 1. 스크롤위치가 100px이상일때
            if (scTop >= 100) {
                topA.classList.add("on");
            } /////////// if ////////////
            // 2. 스크롤위치가 100px미만일때
            else {
                topA.classList.remove("on");
            } /////////// else ///////////

            /////////////////////////////////
            // 위로가기버튼 스크롤 반응하기 ///
            /////////////////////////////////

            // 1. 스크롤위치가 200px초과일때
            if (scTop > 200) {
                tbtn.classList.add("on");
            } /////////// if ////////////
            // 2. 스크롤위치가 200px이하일때
            else {
                tbtn.classList.remove("on");
            } /////////// else ///////////


            /////////////////////////////////
            /////// 등장액션 클래스 주기 /////
            /////////////////////////////////

            if (scTop > scPos[0]-winH && scTop < scPos[0]) {
                scAct[0].classList.add("on");
            }
            else if (scTop > scPos[1]-winH && scTop < scPos[1]) {
                scAct[1].classList.add("on");
            }
            else if (scTop > scPos[2]-winH && scTop < scPos[2]) {
                scAct[2].classList.add("on");
            }

            /*********************************************** 
                [ 클래스 관리객체 : classList ]
                1. 삽입 메서드 : add(클래스명)
                2. 제거 메서드 : remove(클래스명)
                3. 삽입/제거 전환 메서드 : toggle(클래스명)
            ***********************************************/


        }); //////////////////// scroll ////////////////////////
        ////////////////////////////////////////////////////////


    }); //////////// 로드구역 //////////////////
///////////////////////////////////////////