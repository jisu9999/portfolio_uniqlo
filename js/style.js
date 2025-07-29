window.addEventListener("DOMContentLoaded", function () {
  const goTopBtn = document.getElementById("goTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      goTopBtn.classList.add("show");
    } else {
      goTopBtn.classList.remove("show");
    }
  });

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

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
  // best_section swiper
  var bestSwiper = new Swiper(".bestSwiper", {
    slidesPerView: 4, // 한 줄에 4개
    slidesPerGroup: 4,
    spaceBetween: 33,
    loop: false,
    pagination: {
      el: ".bestSwiper-pagination",
      clickable: true, // dot 클릭으로 이동 가능
      renderBullet: function (index, className) {
        // dot 2개만 만들기
        if (index > 1) return ""; // index: 0,1까지만
        return `<span class="${className}">
        <img src="images/icon/dot2.png" alt="dot${index + 1}" />
        </span>`;
      },
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 2,
      },
      1300: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });

  // ✅ dot 상태 바꾸는 함수 따로 분리
  function best_updateDotImages(bestSwiper) {
    const best_bullets = document.querySelectorAll(".bestSwiper-pagination .swiper-pagination-bullet");
    const best_groupIndex = Math.floor(bestSwiper.activeIndex / bestSwiper.params.slidesPerGroup);

    best_bullets.forEach((bullet, index) => {
      const img = bullet.querySelector("img");
      img.src = index === best_groupIndex ? "images/icon/dot1.png" : "images/icon/dot2.png";
    });
  }

  // ✅ 슬라이드 변경 시 실행
  bestSwiper.on("slideChange", function () {
    best_updateDotImages(bestSwiper);
  });

  // ✅ 초기 진입 시 한 번 실행
  best_updateDotImages(bestSwiper);

  
  // ustory_section swiper
  var swiper2 = new Swiper(".ustorySwiper", {
    slidesPerView: 2, // 한 화면에 2개
    slidesPerGroup: 2, // 클릭, 터치 시 3개씩 넘어감
    spaceBetween: 35,
    loop: false,
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
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 2.5,
        slidesPerGroup: 2,
      },
      1300: {
        slidesPerView: 3,
        slidesPerGroup: 3,
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
  var swiper3 = new Swiper(".newSwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4, // 클릭, 터치 시 4개씩 넘어감
    spaceBetween: -1,
    loop: false,
    simulateTouch: true, // 드래그 허용 (기본 true지만 명시 추천)
    pagination: {
      el: ".newSwiper-pagination",
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
  function updateDotImages2(swiper3) {
    const bullets2 = document.querySelectorAll(".newSwiper-pagination .swiper-pagination-bullet");
    const groupIndex2 = Math.floor(swiper3.activeIndex / swiper3.params.slidesPerGroup);

    bullets2.forEach((bullet, index) => {
      const img = bullet.querySelector("img");
      img.src = index === groupIndex2 ? "images/icon/dot1.png" : "images/icon/dot2.png";
    });
  }

  // ✅ 슬라이드 변경 시 실행
  swiper3.on("slideChange", function () {
    updateDotImages2(swiper3);
  });

  // ✅ 초기 진입 시 한 번 실행
  updateDotImages2(swiper3);

  // ✅ 🔥 dot 클릭한 직후에도 강제로 업데이트!
  document.querySelector(".newSwiper-pagination").addEventListener("click", () => {
    // Swiper 내부적으로 슬라이드 이동 후 약간의 지연이 있으므로
    setTimeout(() => updateDotImages2(swiper3), 0);
  });

  document.querySelectorAll(".newSwiper img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
  document.querySelectorAll(".newSwiper a").forEach((a) => {
    // 클릭 막는 건 필요에 따라 유지
    // a.addEventListener("click", (e) => e.preventDefault());

    a.addEventListener("dragstart", (e) => e.preventDefault()); // 이미지 드래그 방지만 OK
    // mousedown 막는건 삭제해보세요 (swiper drag 방해 가능)
    // a.addEventListener("mousedown", (e) => e.preventDefault());
  });

  // kids_section swiper
  var swiper4 = new Swiper(".kidsSwiper", {
    slidesPerView: 2,
    spaceBetween: 25,
    slidesPerGroup: 2, // 클릭, 터치 시 2개씩 넘어감
    centeredSlides: false,
    pagination: {
      el: ".kidsSwiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        // dot 3개만 만들기
        if (index > 2) return ""; // index: 0,1,2까지만
        return `<span class="${className}">
        <img src="images/icon/dot2.png" alt="dot${index + 1}" />
        </span>`;
      },
    },
  });

  // ✅ dot 상태 바꾸는 함수 따로 분리
  function updateDotImages3(swiper4) {
    const bullets3 = document.querySelectorAll(".kidsSwiper-pagination .swiper-pagination-bullet");
    const groupIndex3 = Math.floor(swiper4.activeIndex / swiper4.params.slidesPerGroup);

    bullets3.forEach((bullet, index) => {
      const img = bullet.querySelector("img");
      img.src = index === groupIndex3 ? "images/icon/dot1.png" : "images/icon/dot2.png";
    });
  }

  // ✅ 슬라이드 변경 시 실행
  swiper4.on("slideChange", function () {
    updateDotImages3(swiper4);
  });

  // ✅ 초기 진입 시 한 번 실행
  updateDotImages3(swiper4);

  // ✅ 🔥 dot 클릭한 직후에도 강제로 업데이트!
  document.querySelector(".kidsSwiper-pagination").addEventListener("click", () => {
    // Swiper 내부적으로 슬라이드 이동 후 약간의 지연이 있으므로
    setTimeout(() => updateDotImages3(swiper4), 0);
  });

  document.querySelectorAll(".kidsSwiper img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });

  // baby_section swiper
  var swiper5 = new Swiper(".babySwiper", {
    slidesPerView: 2,
    spaceBetween: 25,
    slidesPerGroup: 2, // 클릭, 터치 시 2개씩 넘어감
    centeredSlides: false,
    pagination: {
      el: document.querySelector(".babySwiper").closest(".babySwiper_wrapper").querySelector(".babySwiper-pagination"),
      clickable: true,
      renderBullet: function (index, className) {
        // dot 3개만 만들기
        if (index > 2) return ""; // index: 0,1,2까지만
        return `<span class="${className}">
          <img src="images/icon/dot2.png" alt="dot${index + 1}" />
          </span>`;
      },
    },
  });

  // ✅ dot 상태 바꾸는 함수 따로 분리
  function updateDotImages4(swiper5) {
    const bullets4 = document.querySelectorAll(".babySwiper-pagination .swiper-pagination-bullet");
    const groupIndex4 = Math.floor(swiper5.activeIndex / swiper5.params.slidesPerGroup);

    bullets4.forEach((bullet, index) => {
      const img = bullet.querySelector("img");
      if (img) {
        img.src = index === groupIndex4 ? "images/icon/dot1.png" : "images/icon/dot2.png";
      }
    });
  }

  // ✅ 슬라이드 변경 시 실행
  swiper5.on("slideChange", function () {
    updateDotImages4(swiper5);
  });

  // ✅ 초기 진입 시 한 번 실행
  updateDotImages4(swiper5);

  // ✅ 🔥 dot 클릭한 직후에도 강제로 업데이트!
  document.querySelector(".babySwiper-pagination").addEventListener("click", () => {
    // Swiper 내부적으로 슬라이드 이동 후 약간의 지연이 있으므로
    setTimeout(() => updateDotImages4(swiper5), 0);
  });

  document.querySelectorAll(".babySwiper img").forEach((img) => {
    img.setAttribute("draggable", "false");
  });
});
