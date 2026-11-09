
const menuButton=document.querySelector(".menu-btn");
const nav=document.querySelector("header nav");
if(menuButton&&nav){menuButton.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuButton.setAttribute("aria-expanded",String(open));});}
const current=location.pathname.replace(/\/+$/,"")||"/";
document.querySelectorAll("header nav a").forEach(a=>{const target=new URL(a.href).pathname.replace(/\/+$/,"")||"/";if(target===current)a.classList.add("active");});
document.querySelectorAll("[data-year]").forEach(el=>el.textContent=new Date().getFullYear());
