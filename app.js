/* //const h1_tag = document.getElementsByTagName("h1");
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

p_tag.classList.remove("hakuna");
p_tag.classList.toggle("hakuna");
const h4_tag = document.createElement("h4");
h4_tag.innerText= "hakuna matat"
console.log(h4_tag);
const div_tag1 = document.querySelector(".wrapper")
div_tag.appendChild(div_tag1) */
////////////////////////
const btnAdd = document.querySelector("#btnAdd")
const btnRemove = document.querySelector("#btnRemove")
const btnToggle = document.querySelector("#btnToggle")
const h1_tag = document.querySelector("#txt")

btnAdd.addEventListener("click",() =>{
    h1_tag.classList.add("hakuna")
})
btnRemove.addEventListener("click",() =>{
    h1_tag.classList.remove("hakuna")
})
btnToggle.addEventListener("click",() =>{
    h1_tag.classList.toggle("hakuna")
})