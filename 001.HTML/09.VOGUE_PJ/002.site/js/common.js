// 공통기능구역

/********************************************** 

**********************************************/


// 윈도우 스크롤 이벤트 함수
// 스크롤 이벤트
// 윈도우 객체에 스크롤 이벤트를 걸어준다
window.addEventListener('scroll', ()=>{

    // 스크롤 위치값
    let scTop = this.scrollY;
        // 세로축 스크롤값 - this는 화살표함수에서 윈도우 객체를 나타냄

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

    console.log('스크롤위치:', scTop);

    // 변경대상: 상단영역 
    let top = document.querySelector('#top');

    // 1. 스크롤위치가 100px 이상일 때
    if(scTop>=100){
        top.classList.add('on');
    }
    // 2. 스크롤위치가 100px 미만일 때
    else{
        top.classList.remove('on');
    }
});