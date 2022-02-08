// 쇼핑몰 배너 JS

// 로드구역
window.addEventListener('load', () => {

    console.log('로딩완료');

    /**********************************************************
       
        [ 슬라이드 이동 기능 정의 ]
        1. 이벤트종류: 클릭
        2. 이벤트대상: 이동버튼 .abtn
        3. 변경대상: 슬라이드 박스 #slide
        4. 기능흐름:
            1) 오른쪽버튼 클릭 시 
            - 선행: -100%로 하나의 슬라이드를 이동한다
            - 후행: 왼쪽에 나가있는 첫번째 슬라이드를 잘라서 맨뒤로 이동시킨다
                이때 left값을 다시 0으로 초기화한다! 
                (기존 트랜지션을 지워야 초기화 과정이 숨겨진다)
                그래야 슬라이드가 튀지 않는다!
            2) 왼쪽버튼 클릭 시
            - 선행: 맨뒤의 슬라이드를 잘라서 맨앞으로 이동
                left값을 -100%로 왼쪽 앞에 공간을 만든다
                (기존 트랜지션을 지워야 초기화 과정이 숨겨진다)
            - 후행: 트랜지션으로 left가 0이 되며 왼쪽에서 슬라이드가 이동하여 들어온다 

        5. 추가기능: 슬라이드 위치표시 블릿
            블릿대상: .indic li
            변경내용 : 슬라이드 순번과 같은 순번의 li에 클래스 "on"주기 (나머진 빼기-초기화)

        6. 광클 시 슬라이드 이동 막기
            슬라이드가 이동하는 동안 실행을 막아준다
            전역변수를 생성하여 이 값이 1일 동안 못 들어오게 함
            다시 슬라이드 이동 후 시간에는 0으로 해제

        7. 슬라이드 자동 넘김
            슬라이드가 일정 시간 간격으로 자동으로 넘어감
            슬라이드를 수동으로 버튼 클릭 시엔 자동넘김 멈춤
            일정 시간 동안 수동조작이 없으면 다시 자동넘김 작동

    ***********************************************************/


    // 이벤트 대상: .abtn
    let abtn = document.querySelectorAll(".abtn");
    // 변경 대상: #slide
    let slide = document.querySelector("#slide");
    // 추가 대상: .indic li
    let indic = document.querySelectorAll(".indic li");
    // 슬라이드 개수 구해오기
    const scnt =
        document.querySelectorAll("#slide li").length;
    // console.log("슬라이드개수:", scnt);

    // 슬라이드가 순서가 바뀌므로 처음에 슬라이드 li에
    // 클래스를 순번에 맞게 부여해 준다!
    for (let i = 0; i < scnt; i++) {
        slide.querySelectorAll("li")[i]
            .classList.add("s" + i);
    } /////// for ///////////////////


    // 오른쪽버튼 클릭시
    abtn[1].onclick = () => {
        goSlide(1);
        clearAuto(); // 자동넘김 지우기
        return false;
    }
    ///////// click /////////
    // 왼쪽버튼 클릭시
    abtn[0].onclick = () => {
        goSlide(0);
        clearAuto(); // 자동넘김 지우기
        return false;
    }
    ///////// click /////////


    // 광클금지 상태변수
    let prot = 0;

    // // 슬라이드 번호 전역변수
    // let snum = 0

    /* 
        함수명: goSlide
        기능: 슬라이드를 다음/이전 슬라이드로 이동시킴
    */

    const goSlide = dir => {
        // dir - 전달변수(1-오른쪽,0-왼쪽)
        // console.log('이동함수',dir);

        // 광클 금지
        if (prot) return false;
        prot = 1; // 잠금상태
        setTimeout(() => {
            prot = 0;
        }, 410);


        // 1. 분기하기
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
                    slide.querySelectorAll('li')[0]);
                // 첫번째 슬라이드 선택: #slide>li 중 1번째
                // 맨뒤로 이동 appendChild

                // 2-2. left값 초기화 + 트랜지션 해제
                slide.style.left = '0';
                slide.style.transition = 'none';
            }, 400);

        }
        // 왼쪽버튼
        else {
            // 1. 맨뒤 요소 맨앞으로 이동
            slide.insertBefore(
                slide.querySelectorAll('li')[scnt - 1],
                slide.querySelectorAll('li')[0]
            );
            // 맨뒤 요소: #slide li중 맨 뒤
            // 맨앞 이동: insertBefore(넣을놈,그전놈)
            // insertBefore(맨뒤li,맨앞li)

            // 2. left값 -100%로 세팅 + 트랜지션 해제
            slide.style.left = '-100%';
            slide.style.transition = 'none';

            // 3. left가 0, 트랜지션 설정 - 슬라이드 들여오기
            // 위의 스타일과 같은 선상에 있으면 덮어써버림
            // 속성변경과 시차가 반드시 필요함
            // setTimeout으로 시차 주기
            setTimeout(() => {
                slide.style.left = '0';
                slide.style.transition = 'left .4s ease-in-out';
            }, 10);

        };

        // console.log('슬라이드번호:',snum);


        // 3. 블릿표시 변경하기
        // (1) 초기화 : 모든 블릿li의 class "on"제거
        for (let x of indic) x.classList.remove("on");
        // (2) 적용하기 : 해당순번의 li에 class "on"넣기
        // 해당순번은 오른쪽이동과 왼쪽이동에 따라 다르다!
        // -> 오른쪽이동일땐 슬라이드 1번, 왼쪽은 0번
        // 순번구할때 코드해석: 
        // slide.querySelectorAll("li")[dir?1:0]
        // dir?1:0 
        // -> dir변수가 1이면 true여서 1출력 아니면 0출력
        // 해당순번은 선택할 li요소의 class명의 뒷번호다!

        let clsnum =
            slide.querySelectorAll("li")[dir ? 1 : 0]
            .getAttribute("class").substring(1);
        // substring(1) -> 2번째 문자부터 끝까지
        // -> 여기서는 "s번호"이므로 s뒤의 번호가 나옴

        // console.log("클래스명:", clsnum);
        indic[clsnum].classList.add("on");


        // a요소 기본이동막기!
        return false;

    }; // goSlide 함수 //////////////


    // 슬라이드 자동넘기기 /////////////////////////////////////
    // 인터발 변수
    let autoI; //지우기용

    /**************************************************** 
        함수명: autoSlide
        기능: 인터발 함수로 슬라이드 자동넘기기
    ****************************************************/

    const autoSlide = () => {
        autoI = setInterval(() => goSlide(1), 2000);
    };

    // 슬라이드 자동넘김 최초호출
    autoSlide();

    // 타임아웃용 변수
    let autoT; // 실행 쓰나미 방지

    /* 
        함수명: clearAuto
        기능: 자동넘김 지우기 후 일정시간 뒤 자동호출
            오른,왼쪽 버튼 클릭시에만 호출됨
    */
    
    const clearAuto = () => {
        // 1. 인터발 지우기
        clearInterval(autoI);
        // 2. 타임아웃 지우기 - 실행쓰나미 방지
        clearTimeout(autoT);
        // 3. 타임아웃 세팅: 일정시간 뒤 자동 인터발 실행
        autoT = setTimeout(autoSlide,3000);
    };

}); // 로드 //////////////////////////