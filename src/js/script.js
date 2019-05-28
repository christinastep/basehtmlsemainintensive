document.querySelector(".button--nav").addEventListener("click", function(){
  document.querySelector(".sidebar").classList.toggle("active");
});

document.querySelector(".button--newPost").addEventListener("click", function(){
  document.querySelector(".post--new").classList.toggle("active");
});
