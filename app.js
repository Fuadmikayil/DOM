//const h1_tag = document.getElementsByTagName("h1");
const h1_tag = document.getElementById("demo");
console.log(h1_tag);
const h2_tag = document.querySelectorAll("#demo");
console.log(h2_tag.textContent);
console.log(h2_tag.innerText);
console.log(h2_tag.innerHtml);
///////////////////////////
const div_tag = document.querySelector(".wrapper")
console.log(div_tag);
const p_tag = document.querySelector("#memo")
p_tag.classList.add("hakuna");
p_tag.classList.remove("hakuna");
p_tag.classList.toggle("hakuna");

