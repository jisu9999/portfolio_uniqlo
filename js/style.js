window.onload = function () {
  // main_visual swiper
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 1900,
      disableOnInteraction: false, // 사용자가 슬라이더를 클릭하거나 드래그했을 때 autoplay를 멈출 것인가?
    },
    speed: 700,
    effect: "fade",
    fadeEffect: {
      crossFade: true, // 두 슬라이드가 부드럽게 겹쳐서 전환됨
    },
  });
  // ustory_section swiper
  var swiper2 = new Swiper(".ustorySwiper", {
    slidesPerView: 3, // 한 화면에 3개
    slidesPerGroup: 3, // 클릭, 터치 시 3개씩 넘어감
    spaceBetween: 35,
    loop: true,
    simulateTouch: true, // 드래그 허용 (기본 true지만 명시 추천)
    grabCursor: true, // 마우스 커서 변경 (UX 향상용)
    pagination: {
      el: ".ustorySwiper-pagination",
      clickable: true, // dot 클릭으로 이동 가능
      renderBullet: function (index, className) {
        // dot 2개만 만들기
        if (index > 1) return ""; // index: 0,1까지만
        return `<span class="${className}">
        <img src="images/icon/dot2.png" alt="dot${index + 1}" />
        </span>`;
      },
    },
  });

  // ✅ dot 상태 바꾸는 함수 따로 분리
  function updateDotImages(swiper) {
    const bullets = document.querySelectorAll(".ustorySwiper-pagination .swiper-pagination-bullet");
    const groupIndex = Math.floor(swiper.activeIndex / swiper.params.slidesPerGroup);

    bullets.forEach((bullet, index) => {
      const img = bullet.querySelector("img");
      img.src = index === groupIndex ? "images/icon/dot1.png" : "images/icon/dot2.png";
    });
  }

  // ✅ 슬라이드 변경 시 실행
  swiper2.on("slideChange", function () {
    updateDotImages(swiper2);
  });

  // ✅ 초기 진입 시 한 번 실행
  updateDotImages(swiper2);

  // ✅ 🔥 dot 클릭한 직후에도 강제로 업데이트!
  document.querySelector(".ustorySwiper-pagination").addEventListener("click", () => {
    // Swiper 내부적으로 슬라이드 이동 후 약간의 지연이 있으므로
    setTimeout(() => updateDotImages(swiper2), 0);
  });

  document.querySelectorAll(".ustorySwiper img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
  document.querySelectorAll(".ustorySwiper a").forEach((a) => {
    // 클릭 막는 건 필요에 따라 유지
    // a.addEventListener("click", (e) => e.preventDefault());

    a.addEventListener("dragstart", (e) => e.preventDefault()); // 이미지 드래그 방지만 OK
    // mousedown 막는건 삭제해보세요 (swiper drag 방해 가능)
    // a.addEventListener("mousedown", (e) => e.preventDefault());
  });

  // new_section swiper
  var swiper = new Swiper(".newSwiper", {
      slidesPerView: 4,
      spaceBetween: -1,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
};
