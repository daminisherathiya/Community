var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
 return new bootstrap.Tooltip(tooltipTriggerEl)
});


video_btn();


function video_btn() {
  document.querySelector(".btn-setter").addEventListener("click",function(){
    document.querySelector(".video-container .btn-setter").remove();
    document.querySelector(".video-container img").remove();
    document.querySelector(".embed-responsive").classList.remove("d-none");
    document.querySelector("iframe").setAttribute("src", document.querySelector("iframe").getAttribute("src") + "?autoplay=1");
    // $("iframe")[0].src += "?autoplay=1";
  })
}
