// Phần Check Email
document
  .getElementById("submitButton")
  .addEventListener("click", function handleSubmit() {
    // Lấy email input
    const emailValue = document
      .getElementById(`email`)
      .value.toLocaleLowerCase();
    // Lấy elements error
    const errorEmail = document.getElementById("error-email");
    // điều kiện là một email??
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // kiểm tra email hợp lệ?
    const checkMail = emailValue.match(regex);

    if (checkMail) {
      document.querySelector(`#info .section-content`).style.display = `block`;
      document.querySelector(`.submit-email`).style.display = `none`;
    } else {
      errorEmail.innerHTML = `Vui lòng nhập đúng định dạng email`;
    }
  });
// Phần Viewmore, Viewless

// Lấy tất cả các phần tử có class "block-section-2"
const blockSection2s = document.querySelectorAll(`.block-section-2`);

// Hàm xử lý hiển thị "view-more"
const view = function () {
  const viewMore = this.querySelector(`.view-more`);
  // const viewLess = this.querySelector(`.view-less`);
  viewMore.style.display = `inline-block`;
  // viewLess.style.display = `none;`;
};

// Hàm xử lý ẩn "view-more"
const hide = function () {
  const viewMore = this.querySelector(`.view-more`);
  // const viewLess = this.querySelector(`.view-less`);
  viewMore.style.display = `none`;
  // viewLess.style.display = `inline-block`;
};

// Thêm sự kiện "mouseover", "mouseout", view-more và view-less cho từng phần tử
for (let i = 0; i < blockSection2s.length; i++) {
  const viewMoreButton = blockSection2s[i].querySelector(`.view-more`);
  const viewLessButton = blockSection2s[i].querySelector(`.view-less`);
  const sectionContent2 = blockSection2s[i].querySelector(`.section-content-2`);
  // Khi di chuột vào hiện View-more, di chuột ra sẽ ẩn View-more
  blockSection2s[i].addEventListener(`mouseover`, view);
  blockSection2s[i].addEventListener(`mouseout`, hide);

  // Khi click "View More", hiển thị nội dung và loại bỏ sự kiện "mouseover"
  viewMoreButton.addEventListener("click", function () {
    blockSection2s[i].removeEventListener(`mouseover`, view);
    sectionContent2.classList.remove("hidden");
    viewMoreButton.style.display = "none";
    viewLessButton.style.display = "inline-block";
    viewMoreButton.closest();
  });
  // Khi click "View Less", ẩn nội dung và kích hoạt lại sự kiện "mouseover
  viewLessButton.addEventListener("click", function () {
    blockSection2s[i].addEventListener(`mouseover`, view);
    sectionContent2.classList.add("hidden");
    viewLessButton.style.display = "none";
    viewMoreButton.style.display = "inline-block";
  });
}
