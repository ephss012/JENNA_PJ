// 보그PJ 공통 링크 설정 JS - linksys.js

// 제이쿼리 블록

$(()=>{

    // console.log('링크시스로딩');

    // 로고 클릭 시 첫페이지로 가기
    $('.logo a').click(function(){
        location.href = 'index.php';
    })

    // gnb메뉴 클릭 시 이동하기
    // 대상: .gnb a + .mognb a

    $('.gnb a, .mognb a').click(function(e){

        // 기본이동 막기
        e.preventDefault();

        // 클릭된 a요소의 텍스트
        let txt = $(this).text().toLowerCase().trim();
            // trim: 앞뒤 공백제거

        console.log(txt);

        if(txt!=='search')
        location.href = "category.php?cat="+txt;
    })
});