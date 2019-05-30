
  document.querySelector(".button--nav").addEventListener("click", function(){
    document.querySelector(".sidebar").classList.toggle("active");
  });
  
  document.querySelector(".button--newPost").addEventListener("click", function(){
    document.querySelector(".post--new").classList.toggle("active");
    document.querySelector(".header").classList.toggle("header__newpost--open");
  });
  
  document.querySelector(".button--sendPost").addEventListener("click", function(){
    document.querySelector(".post--new").classList.toggle("active");
    document.querySelector(".header").classList.toggle("header__newpost--open");
  });

  document.querySelector(".button--close--alert").addEventListener("click", function(){
    document.querySelector(".popup--info").style.right = "-500px";
  });
