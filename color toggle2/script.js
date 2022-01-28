

function toggleNav() {
    let getSidebarUl = document.querySelector(".nav-sidebar ul");

    if (getSidebarUl.style.visibility === "visible") {
        getSidebarUl.style.visibility = "hidden";
    } else {
        getSidebarUl.style.visibility = "visible";
    }
}


document.querySelector("#li-home").addEventListener("click", function () {
    document.body.style.backgroundColor = "#f1f1f1";
    toggleNav();
});

document.querySelector("#li-blue").addEventListener("click", function () {
    document.body.style.backgroundColor = "blue";
    toggleNav();
});

document.querySelector("#li-lightblue").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
    toggleNav();
});

document.querySelector("#li-purple").addEventListener("click", function () {
    document.body.style.backgroundColor = "purple";
    toggleNav();
});

document.querySelector("#li-pink").addEventListener("click", function () {
    document.body.style.backgroundColor = "pink";
    toggleNav();
});


document.querySelector("#li-home").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "#f1f1f1";
});

document.querySelector("#li-blue").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "blue";
});

document.querySelector("#li-lightblue").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "lightblue";
});

document.querySelector("#li-purple").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "purple";
});

document.querySelector("#li-pink").addEventListener("mouseover", function (mouseover) {
    mouseover.target.style.backgroundColor = "pink";
});
