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
            1) 오른쪽 버튼 클릭 시 다음 슬라이드 오도록 left값 -100% 단위로 설정
                ㄴ 한계값인 마지막 슬라이드 이동 배수인 4, 즉 400%
            2) 왼쪽버튼 클릭 시 이전 슬라이드가 오도록 left값 -100% 단위 배수 중 이전 배수가 되도록 변경
                ㄴ 한계값은 첫번째 슬라이드 위치값인 0 기준
            3) 처음과 마지막 슬라이드 연결
                ㄴ 처음은 마지막으로, 마지막은 처음으로 돌아가게 함
        5. 
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

        // 1. 분기하기
        if (dir) { //dir이 1이면(1===true)
            // 슬라이드 번호 1씩 증가
            snum++;
            // 한계수에서 마지막 번호로 - 슬라이드가 끝나면 다시 처음으로 보내기
            if (snum === 5) snum = 0;
        } else {
            // 슬라이드 번호 1씩 감소
            snum--;
            if (snum === -1) snum = scnt-1;
                // 마지막 슬라이드 번호는 (슬라이드개수-1)
        }

        // console.log('슬라이드번호:',snum);

        // 2. 이동하기 - 슬라이드 left값 변경 
        slide.style.left = (-100*snum)+'%';
        slide.style.transition = 'left .4s ease-in-out';


        // 3. 블릿표시 변경
            // 1) 초기화 - 모든 블릿의 li에 on 제거
        for(let x of indic) x.classList.remove('on');
            // 2) 적용하기 - 해당 순번의 li에 on 넣기
        indic[snum].classList.add("on");


        return false;
        // a요소 기본 이동 막기 - 아래에 와야함

    }; // goSlide 함수 //////////////

}); // 로드 //////////////////////////