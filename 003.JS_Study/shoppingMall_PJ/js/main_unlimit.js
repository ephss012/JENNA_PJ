// 쇼핑몰 배너 JS

// 로드구역
window.addEventListener('load', () => {

    console.log('로딩완료');

    /* 
        [ 슬라이드 이동 기능 정의 ]
        1. 이벤트종류: 클릭
        2. 이벤트대상: 이동버튼 .abtn
        3. 변경대상: 슬라이드 박스 #slide
        4. 기능흐름:
            
        5. 추가기능: 슬라이드 위치표시 블릿
            블릿대상: .indic li
            변경내용 : 슬라이드 순번과 같은 순번의 li에 클래스 "on"주기 (나머진 빼기-초기화)
    */

    // 이벤트대상
    let abtn = document.querySelectorAll('.abtn');
    // 변경대상
    let slide = document.querySelector('#slide');
    // 추가대상
    let indic = document.querySelectorAll('#indic li');


    // 좌우 버튼 클릭시
    abtn[0].onclick = () => goSlide(0);
    abtn[1].onclick = () => goSlide(1);


    // 슬라이드 번호 전역변수
    let snum = 0
    // 슬라이드 개수 구해오기
    const scnt = document.querySelectorAll('#slide li').length;
    console.log('슬라이드 개수:', scnt);

    /* 
        함수명: goSlide
        기능: 슬라이드를 다음/이전 슬라이드로 이동시킴
    */

    const goSlide = dir => { // dir - 방향전달변수
        // console.log('이동함수',dir);

        // 오른쪽버튼
        if (dir) { //dir이 1이면(1===true)

            // 1. 이동하기 - 슬라이드 left값 변경 
            slide.style.left = '-100%';
            slide.style.transition = 'left .4s ease-in-out';

            // 2. 이동 후 잘라서 끝으로 이동
            // 이동 후 -> setTimeout(함수,시간)
            setTimeout(() => {
                // 2-1. 첫번째 슬라이드 맨뒤로
                slide.appendChild(
                    slide.querySelectorAll('li')[0]
                );
                // 첫번째 슬라이드 선택: #slide>li 중 1번째
                // 맨뒤로 이동 appendChild

                // 2-2. left값 초기화
                slide.style.left = '0';

            }, 400);

        } 
        // 왼쪽버튼
        else {}

        // console.log('슬라이드번호:',snum);



        // 3. 블릿표시 변경
        // 1) 초기화 - 모든 블릿의 li에 on 제거
        for (let x of indic) x.classList.remove('on');
        // 2) 적용하기 - 해당 순번의 li에 on 넣기
        indic[snum].classList.add('on');


        return false;
        // a요소 기본 이동 막기 - 아래에 와야함

    }; // goSlide 함수 //////////////

}); // 로드 //////////////////////////