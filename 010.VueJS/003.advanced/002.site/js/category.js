// 카테고리 페이지 JS - category.js

// Get방식으로 넘어온 값 받기!
let pm = location.href;

// 에러방지를 위해 물음표 존재여부 체크하기!!!
if (pm.indexOf("?") === -1) {
    alert("비정상적인 접근입니다!");
    location.href = "index.html";
    // 첫 페이지로 돌아가!
} ////////////// if ///////////////

// url로 받은 문자값 가공하기!
pm = pm.split("?")[1].split("=")[1];

console.log("카테고리->", pm);

//////////// 로딩구역 /////////////////////
window.addEventListener("DOMContentLoaded",()=>{

    console.log("로딩완료");

    /// 데이터 바인딩을 위한 Vue 인스턴스 생성하기 ///
    new Vue({
        el: "#cont", // 바인딩할 대상(변경요소 포함 부모요소)
        data: {
            vals: {}, // json 데이터가 객체임!
            catName: pm
            // 파라미터로 넘어온 값을 Vue 데이터변수에 넣기!
        }, //// data ////
        mounted: function(){
            axios // 엑시오스 객체
            .get("js/real.json") // 파일읽기
            .then(x => this.vals = x); // 할당(x변수로 전달!)
        } /// mounted /////
    }); ///////////// Vue /////////////////

}); ///////////// 로딩구역 ////////////////////////
//////////////////////////////////////////////////