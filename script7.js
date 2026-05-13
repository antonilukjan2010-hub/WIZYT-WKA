const button = document.querySelector(".button1")
const body = document.querySelector("body")
button.addEventListener("click", function(){
    setTimeout(() => {
        body.style.background = "red"
    }, 1000);
})