// 옷소매 갤러리 JS - main.js

///////////////// 로딩구역 ///////////////////////

// 버튼 하나로 합치기 - 버튼 통합 구현 /////////////////////////////

$(() => {
    console.log('로딩완료');

    // 광클금지 상태변수
    let prot = 0;

    // 갤러리박스
    let gbx = $('.gbx');

    // 버튼통합 구현
    // 이벤트대상: .abtn
    $('.abtn').click(function () {

        // 광클 금지 
        if (prot) return;
        prot = 1;
        setTimeout(() => prot = 0, 500);


        // console.log('오른쪽인가?', $(this).is('.rb'))
        // is()메서드 - 선택자의 구분요소인지 true/false 응답
        // $(this).is('.rb') -> 클릭된 버튼은 rb인가? true/false

        // 분기문 /////
        // 오른쪽버튼
        if ($(this).is(".rb")) {
            // 맨앞요소 맨뒤로 이동!
            // append(요소)
            gbx.append(gbx.find("div").first());
        } /////////// if ////////
        /// 왼쪽버튼 //////////
        else {
            // 맨뒤요소 맨앞으로 이동!
            // prepend(요소)
            gbx.prepend(gbx.find("div").last());

        } ///////// else /////////

        // 자동호출 지우기
        clearAuto();

    }) // click ///////////



    // 인터발 설정하기 //////////////
    let autoI, // 인터발변수
        autoT; // 

    // 1. 인터발함수
    const autoSlide = () => {
        autoI = setInterval(() => 
            gbx.append(gbx.find("div").first()),2000);
    };// 오른쪽으로 오토 슬라이드 auto slide

    // 2. 인터발 최초호출
    autoSlide();

    // 인터발 호출함수
    // const callAuto = () => autoSlide;
        // 인터발 최초 호출
        // callAuto();

    // 3. 지우기 함수
    const clearAuto = () => {
        clearInterval(autoI); // 인터발 지움
        clearTimeout(autoT); // 타임아웃 지움
        autoT = setTimeout(autoSlide,3000); // 3초 후 호칠
    }; // clear auto


    /* ********************************************************** */

        // 오른쪽 버튼 클릭 시 //////////////
        // 대상: .rb
        // 변경대상: .gbx

        /* $('.rb').click(function () {

            // console.log('오른쪽버튼');
            // 맨앞 요소 맨뒤로 이동 - append
            gbx.append(gbx.find('div').first());

        }) */ // right click //////////////


        // 왼쪽 버튼 클릭 시 //////////////
        // 대상: .lb
        // 변경대상: .gbx

        /* $('.lb').click(function () {
            // console.log('왼쪽버튼');
            // 맨앞 요소 맨뒤로 이동 - prepend
            gbx.prepend(gbx.find('div').last());

        }) */ // left click //////////////

    /* ********************************************************** */


})

///////////// 로딩구역 //////////////////////
/////////////////////////////////////////////////