// 제이쿼리 기본 JS - main.js 

///////////////////////////// 제이쿼리 로드구역 /////////////////////////////

$(()=>{
    console.log('제이쿼리 로딩완료');

    /******************************** 
        1. 대상선정 변수할당
    ********************************/

    // 대상1: 버튼들 .btns>button
    let btns = $('.btns>button');
    console.log('버튼개수:', btns.length);

    // 대상2: 미니언즈 .mi
    let mi = $('.mi');

    // 대상3: 빌딩 방 .building li
    let bd = $('.building li');
    console.log('룸 개수:', bd.length);

    // 대상4: 메시지 박스 .msg
    let msg = $('.msg');
        // 삽입이미지 변수 세팅
        // 좀비 이미지 태그
        let mz1 = 
            '<img src="images/mz1.png" alt="좀비" class="mz"';
        let mz2 = 
            '<img src="images/mz2.png" alt="좀비" class="mz"';
        let zom = 
            '<img src="images/zom.png" alt="좀비들" class="mz"';
        // 주사기 이미지 태그
        let inj = 
            '<img src="images/inj.png" alt="주사기" class="inj"';
    

    /******************************** 
        2. 초기화 세팅
    ********************************/

    // 2-1. 버튼 세팅 - 모든 버튼을 숨기고 첫번째만 보이게 함
    btns.hide().first().show();
        //버튼들.숨겨.첫번째.보여

    // 2-2. 빌딩 숫자 세팅
    bd.each();
    /* 
        for문을 사용하지 않고 돌게 해주는 제이쿼리 메서드
        >> each(function(idx,ele){구현부})
        >> each((idx,ele)=>{구현부})

        - 선택요소를 순서대로 돌면서 구현부를 실행
        - idx 첫번째 전달변수는 순번이 전달됨(0부터)
        - ele 두번째 전달변수는 요소자신(this키워드)
    */
});