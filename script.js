let number;
number = document.querySelector("#rooms");

let but;
but = document.querySelector(".btn");

let available = Number(number.textContent);

but.addEventListener("click", function() {
    available -= 1;
    number.textContent = available;
})