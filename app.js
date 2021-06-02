const Sidebar = document.querySelector("nav");
const ham = document.querySelector(".ham");
const content = document.querySelector("main");

ham.addEventListener("click", () => {
  Sidebar.classList.toggle("active");

  if (Sidebar.classList.contains("active")) {
    ham.classList.replace("fa-bars", "fa-times");
    content.style.opacity = "20%";
  } else {
    ham.classList.replace("fa-times", "fa-bars");
    content.style.opacity = "100%";
  }
});
