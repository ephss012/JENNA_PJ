// 공통 기능 구현 JS - common.js //

// 전역변수 구역 ///////////////
// 모바일여부변수(1-모바일,0-아님)
let mob = 0;

// 모바일 체크 함수 //
const chgMob = () => {
    // 500px이하 모바일
    if ($(window).width() <= 500) {
        mob = 1;
        // 상단영역 변경 클래스 강제제거하기!
        $("#top").removeClass("on");
        // removeClass(클래스명) -> 클래스제거
    } ////// if ///////////
    // 500px 초과시
    else mob = 0;
    // console.log("모바일:",mob);
}; ///////// chgMob함수 ///////

// 모바일 체크 함수 최초호출
chgMob();

// 윈도우 리사이즈시 모바일 체크함수 호출
$(window).resize(chgMob);



//// 제이쿼리 코드구역 /////////////////////////////
$(() => {

    // 1. 햄버거 버튼(.hbtn) 클릭시
    // 전체 메뉴 보이기: .mobwrap -> 검색창은 숨김!
    $(".hbtn").click(() => {
        $(".mobwrap").slideToggle(400, "easeInOutCubic");
        $(".mos").hide();
    }); ////// click ////////

    // 2. 검색 버튼(.sbtn) 클릭시
    // 검색창 보이기: .mos -> 전체메뉴는 숨김!
    $(".sbtn").click(() => {
        $(".mos").slideToggle(300, "easeInOutCubic");
        $(".mobwrap").hide();
    }); //////// click /////////////


    /* 
        slideUp(시간,이징,함수)
        원래크기에서 height값을 0으로 만듬
        0이된후 display:none
        slideDown(시간,이징,함수)
        display:none이 다시 보이면서
        height값이 0에서 원래 크기로 돌아감
        내가 계산 안해도 됨!!!
        slideToggle(시간,이징,함수)
        slideUp/slideDown 자동전환함!
    
    */


    /************************************** 
        [ 따라다니는 원 구현하기 ]
        - 이벤트 대상: window
        - 이벤트 종류: mousemove
        - 변경대상: div#cs (cursor를 줄임)
        - 방법: 동적으로 body에 #cs를 추가함
    **************************************/
    // $("body").append('<div id="cs"></div>');
    // // 커서 변수에 할당
    // let cs = $("#cs");
    // // 커서에 css설정
    // cs.css({
    //     position: "fixed",
    //     top: "0",
    //     left: "0",
    //     width: "80px",
    //     height: "80px",
    //     borderRadius: "50%",
    //     backgroundColor: "silver",
    //     transition: ".4s ease-out",
    //     mixBlendMode: "exclusion",
    //     /* 겹쳐질때 색상변경모드 */
    //     zIndex: "9999"
    // }); ////// css /////////

    // /* 
    //     mix-blend-mode 속성 : 겹쳐져서 색상을 변경하는 속성
    //     https://www.w3schools.com/csSref/playdemo.asp?filename=playcss_mix-blend-mode&preval=normal
    // */

    // // 윈도우에서 마우스 움직일때 커서 따라다니기!
    // $(window).mousemove((e)=>{
    //     console.log(e.pageX,e.clientX, e.pageY,e.clientY);
    //     // 커서의 top, left 위치값 변경
    //     cs.css({
    //         top: (e.clientY-40) + "px",
    //         left: (e.clientX-40) + "px"
    //     }); ///// css /////////

    // }); /////// mousemove ///////////

    // // a요소를 따라다니는 커서 보다 위에오도록
    // // 포지션을 주고 z-index를 높인다!
    // // z-index는 포지션이 있어야 적용됨!
    // $("a").css({position:"relative",zIndex:"99999"})




}); /////////// jQB ////////////////////////






///////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",
    () => {
        // console.log("로딩완료!");

        /// 부드러운 스크롤 호출!(제이쿼리 아님!)
        startSS();

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
        let winH = window.innerHeight / 2;
        // window.innerHeight는 윈도우의 창높이(스크롤미포함)

        /***********************************/

        /////////////////////////////////////////////
        /// 페이지 등장요소의 페이지 위치값 셋팅하기 ///
        /////////////////////////////////////////////
        // offsetTop은 선택요소의 맨위로 부터의 top값!
        // for(시작값;한계값;증감){코드}
        for (let i = 0; i < scAct.length; i++) {
            scPos[i] = scAct[i].offsetTop;
            // console.log("페이지위치값",i,"번째:",scPos[i]);
        } ///////// for문 ////////////////////////

        /****************************************** 
            함수명: scAction
            기능: 스크롤 위치값이 설정범위에 들어가면
                해당 순번의 요소가 등장한다!
        ******************************************/
        const scAction = seq => { // seq 순번

            // console.log("순번:",seq);

            if (scTop > scPos[seq] - winH && // 시작위치
                scTop < scPos[seq]) { // 끝위치
                scAct[seq].classList.add("on");
            } ///////// if ////////////////////

        }; /////////// scAction 함수 ////////////////////
        /////////////////////////////////////////////////


        // 변경대상 /////////////////////
        // 상단영역 - #top
        let topA = document.querySelector("#top");
        // 위로가기 버튼 - .tbtn
        let tbtn = document.querySelector(".tbtn");

        /////// 위로가기버튼 클릭시 맨위로 가기! ///////
        /// 부드러운 스크롤의 위치변수 pos에 0값을 주면 위로이동함
        tbtn.onclick = () => {
            pos = 0;
            return false;
        };
        // return false -> a요소의 기본이동기능을 못하게 막음!

        ////////////////////////////////////////////
        ///////// 윈도우 스크롤 이벤트 함수 /////////
        ////////////////////////////////////////////
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

            // 1. 스크롤위치가 100px이상일때+모바일아닐때
            if (scTop >= 100 && !mob) {
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

            // scAct 변수에 담긴 등장액션할 요소의 개수만큼
            // scPos 배열변수에 위치값이 셋팅되어 있다!
            // 이 배열을 이용하여 forEach() 메서드로
            // 위치체크를 하여 클래스"on"을 넣어주는 함수
            // scAction() 함수를 순번과 함께 호출해 준다!!!

            scPos.forEach((val, idx) => scAction(idx));
            // 배열객체.forEach((배열값,순번)=>{});

            /* 
            배열객체.forEach(function(item,index,arr){})
            
            - forEach는 함수내부에 3가지 값을
            전달한다!
            1. item : 배열의 값
            2. index : 배열의 순번(0부터~)
            3. arr : 배열객체자신!
            -> 전달변수의 숫자와 순서가 중요함!
            -> 전달변수명은 다르게 쓸 수 있음!
            _________________________
            다르게 표현해 보자!
                        
            배열객체.forEach((배열값)=>{})
            배열객체.forEach((배열값,순번)=>{})
            배열객체.forEach((배열값,순번,배열자신)=>{})
                    
          */

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