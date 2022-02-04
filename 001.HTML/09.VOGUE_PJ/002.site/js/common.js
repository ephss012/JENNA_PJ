// 공통기능구역

/********************************************** 

**********************************************/

// 스크롤 위치값
let scTop;
// 세로축 스크롤값 - this는 화살표함수에서 윈도우 객체를 나타냄
let topA;
let tbtn;

///////////// 로드구역 //////////////////////
window.addEventListener("DOMContentLoaded",
    () => {
        console.log("로딩완료!");

        // 변경대상 /////////////////////
        // 상단영역 - #top (전역변수 top)
        topA = document.querySelector("#top");
        // 위로가기 버튼 - .tbtn (전역변수 tbtn)
        tbtn = document.querySelector(".tbtn");

    });


// 윈도우 스크롤 이벤트 함수
// 스크롤 이벤트
// 윈도우 객체에 스크롤 이벤트를 걸어준다
window.addEventListener('scroll', () => {

    // // 스크롤 위치값(전역변수 scTop)
    scTop = this.scrollY;

    // scrollY - 세로축 스크롤 위치값 리턴
    // this는 화살표함수에서 window객체를 나타냄

    /************************************************** 
     
        [ 윈도우 세로 스크롤 위치값 가져오는 방법 ]
        1. this.scrollY (this키워드가 window의미)
        2. window.scrollY
        3. document.scrollingElement.scrollTop
        4. document.documentElement.scrollTop
        5. document.querySelector("html").scrollTop

        __________________________________________

        [ 가로스크롤일 경우 ]
        scrollY -> scrollX
        scrollTop -> scrollLeft
        
    **************************************************/

    // console.log('스크롤위치:', scTop);

    // 변경대상: 상단영역 
    // let top = document.querySelector('#top');



    //////////////////////////////
    // 상단영역 스크롤 반응하기 ///
    /////////////////////////////
    
    // 1. 스크롤위치가 100px이상일때
    if(scTop>=100){
        topA.classList.add("on");
    } /////////// if ////////////
    // 2. 스크롤위치가 100px미만일때
    else{
        topA.classList.remove("on");
    } /////////// else ///////////


    /////////////////////////////////
    // 위로가기버튼 스크롤 반응하기 ///
    /////////////////////////////////
    if (scTop > 200) {
        tbtn.classList.add("on");
    } /////////// if ////////////
    // 2. 스크롤위치가 200px이하일때
    else {
        tbtn.classList.remove("on");
    } /////////// else ///////////

    /*********************************************** 
        [ 클래스 관리객체 : classList ]
        1. 삽입 메서드 : add(클래스명)
        2. 제거 메서드 : remove(클래스명)
        3. 삽입/제거 전환 메서드 : toggle(클래스명)
    ***********************************************/
});