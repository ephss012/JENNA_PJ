// 보그 PJ 갤러리 JS - gallery.js //

$(() => { ////////// jQB ///////////////////////////

  console.log("갤러리 로딩완료!");

  var swiper = new Swiper(".mySwiper", {
      // slidesPerView: 3, // 한 화면당 슬라이드 개수
      // spaceBetween: 30, // 슬라이드 사이간격

      // 사이즈별 슬라이드 개수, 간격 동적변경셋팅
      // Responsive breakpoints
      breakpoints: {
          // when window width is >= 500px
          500: {
              slidesPerView: 1,
              spaceBetween: 0
          },
          // when window width is >= 700px
          700: {
              slidesPerView: 2,
              spaceBetween: 10
          },
          // when window width is >= 1000px
          1000: {
              slidesPerView: 3,
              spaceBetween: 20
          }
      },

      loop: true, // 무한루프
      pagination: { // 하단블릿
          el: ".swiper-pagination", // 블릿대상박스
          clickable: true, // 블릿클릭가능여부
      },
      navigation: { // 양쪽이동버튼
          nextEl: ".swiper-button-next", // 다음버튼대상
          prevEl: ".swiper-button-prev", // 이전버튼대상
      },
      autoplay: { // 자동넘김
          delay: 2000, // 사이시간
          disableOnInteraction: false,
          // 상호작용없애기(false면 안건들면 다시 자동넘김)
      },
  });


}); ////////////// jQB ///////////////////////////