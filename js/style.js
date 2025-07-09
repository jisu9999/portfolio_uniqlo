window.onload = function () {
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    // autoplay: {
    //   delay: 1900,
    //   disableOnInteraction: false, // 사용자가 슬라이더를 클릭하거나 드래그했을 때 autoplay를 멈출 것인가?
    // },
  });
  var swiper2 = new Swiper(".ustorySwiper", {
    slidesPerView: 3,
    spaceBetween: 35,
    pagination: {
      el: ".custom-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className}><img src="images/pagination/dot${index + 1}.png" alt="pagination" /></span>`;
      },
    },
  });

  // point_section hover시 이미지변경
  const img = document.querySelector(".hover-change");

  img.addEventListener("hover", () => {
    img.src = "images/point_section/airism_hover_img.png";
  });
};
