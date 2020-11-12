const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
const link4 = document.querySelector("#link4");
const link5 = document.querySelector("#link5");

const lesson1 = document.querySelector("#lesson-1");
const lesson2 = document.querySelector("#lesson-2");
const lesson3 = document.querySelector("#lesson-3");
const lesson4 = document.querySelector("#lesson-4");
const lesson5 = document.querySelector("#lesson-5");

link1.addEventListener("click", () => {
  lesson1.style.display = "initial";
  lesson2.style.display = "none";
  lesson3.style.display = "none";
  lesson4.style.display = "none";
  lesson5.style.display = "none";
});

link2.addEventListener("click", () => {
  lesson1.style.display = "none";
  lesson2.style.display = "initial";
  lesson3.style.display = "none";
  lesson4.style.display = "none";
  lesson5.style.display = "none";
});

link3.addEventListener("click", () => {
  lesson1.style.display = "none";
  lesson2.style.display = "none";
  lesson3.style.display = "initial";
  lesson4.style.display = "none";
  lesson5.style.display = "none";
});

link4.addEventListener("click", () => {
  lesson1.style.display = "none";
  lesson2.style.display = "none";
  lesson3.style.display = "none";
  lesson4.style.display = "initial";
  lesson5.style.display = "none";
});

link5.addEventListener("click", () => {
  lesson1.style.display = "none";
  lesson2.style.display = "none";
  lesson3.style.display = "none";
  lesson4.style.display = "none";
  lesson5.style.display = "initial";
});
