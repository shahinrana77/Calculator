let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("input");
let result = document.querySelector(".equal");
let reset = document.querySelector(".reset");
let del = document.querySelector(".del");
let string = "";

buttons.forEach(button =>{
  button.addEventListener("click", ()=>{
    string += button.innerHTML;
    display.value = string;
  });
});

result.addEventListener("click", ()=>{
  display.value = eval(string);
});

reset.addEventListener("click", ()=>{
  string = "";
  display.value = "";
});

// del.addEventListener("click", ()=>{
//   // string-- 
//   display.value -= ;
//   console.log(string);
// })
