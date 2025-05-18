// Ẩn thông tin User
//kiểm tra xem đúng form email chưa
function handleSubmit() {
const emailValue=document.getElementById("email").value.toLowerCase();
// email error
const errorMail = document.querySelector("#error-email");
// điều kiện để là 1 email đúng
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//dùng match để ktra email vừa nhập
const checkMail= emailValue.match(regex);
    // Your form submission logic here
//lấy phần chứa thông tin user
const sectionContent=document.querySelector('#info1');
console.log('check section',sectionContent);
// lấy Element để ksoat submit
const submitControl = document.querySelector('.submit-email');
if(checkMail){
    sectionContent.style.display='block';
    submitControl.style.display='none';
    errorMail.innerHTML='';
}else{
    errorMail.innerHTML='Định dạng email bạn sai, vui lòng kiểm tra lại'; 
}
}


//view more hiện khi rê chuột qua
function handleOnMouseOver(element){
    const viewMouse=element.querySelector('.view-more');
    console.log('timon',viewMouse);
    viewMouse.style.display='inline-block';
}

//ẩn khi rời chuột
function handleOnMouseOut(element){
    const viewMouse=element.querySelector('.view-more');
    console.log('timon',viewMouse);
    viewMouse.style.display='none';
}
//ẩn- hiện more-less
document.addEventListener("DOMContentLoaded", function () {
  const jobItems = document.querySelectorAll(".job-item");

  jobItems.forEach((item) => {
    const viewMoreBtn = item.querySelector(".view-more");
    const lessMoreBtn = item.querySelector(".less-more");
    const workDetails = item.querySelector(".job-content"); 

    // Nếu không có các phần tử thì bỏ qua
    if (!viewMoreBtn || !lessMoreBtn || !workDetails) return;

    viewMoreBtn.addEventListener("click", () => {
      viewMoreBtn.style.display = "none";
      lessMoreBtn.style.display = "inline-block";
    //   workDetails.forEach((detail) => {
    //     detail.style.display = "block";
    //   });
      workDetails.style.display = "block";
    });

    lessMoreBtn.addEventListener("click", () => {
      lessMoreBtn.style.display = "none";
      viewMoreBtn.style.display = "inline-block";
    //   workDetails.forEach((detail) => {
    //     detail.style.display = "none";
    //   });
    workDetails.style.display = "none";
    });

    // 👉 Tùy chọn: Hiện nút nếu có work-detail
    viewMoreBtn.style.display = "inline-block";
  });
});

 /* viewMoreBtn.addEventListener("click", function () {
    viewMoreBtn.style.display = "none";
    lessMoreBtn.style.display = "inline-block";
    workDetail.style.display = "block";
  });

  lessMoreBtn.addEventListener("click", function () {
    lessMoreBtn.style.display = "none";
    viewMoreBtn.style.display = "inline-block";
    workDetail.style.display = "none";*/
  