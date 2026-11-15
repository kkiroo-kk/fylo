const menu = document.getElementById("menu");
const menux = document.getElementById("menux");
const muneShow = document.querySelector(".show");

// Open menu
menu.addEventListener("click", function () {


    menux.style.display = "block";
    menu.style.display = "none";
    muneShow.classList.add("open");
})

// Close menu

menux.addEventListener("click", function () {

    menux.style.display = "none";
    menu.style.display = "block";
    muneShow.classList.remove("open");

})