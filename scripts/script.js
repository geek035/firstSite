var navList = document.querySelector(".collapsedNavList"),
    middleLayer = document.querySelector(".middle-part"),
    lastLayer = document.querySelector(".final-part"),
    charactersList = document.querySelector(".characters-list"),
    wrapperList = document.querySelector(".arcticle-wrapper"),
    firstListActicle = document.querySelector(".first-character-acticle"),
    lastListActicle = document.querySelector(".last-character-acticle");

var wheelListner = function (event) {
    let scroll = Number(document.body.style.getPropertyValue("--scrollList").slice(0, -2)) || 0;

    if (firstListActicle.getBoundingClientRect().left >= charactersList.getBoundingClientRect().left){
        if (event.deltaY > 0){
            document.body.style.setProperty("--scrollList", `${scroll - 10}px`);
            document.body.style.overflowY = "hidden";
            console.log("hi")

        } else {
            document.body.style.overflowY = "auto";
            window.removeEventListener("wheel", wheelListner);
        }
    } else if (lastListActicle.getBoundingClientRect().right <= charactersList.getBoundingClientRect().right) {
        console.log(wrapperList.getBoundingClientRect().right, charactersList.getBoundingClientRect().right)
        if (event.deltaY < 0) {
            document.body.style.setProperty("--scrollList", `${scroll + 10}px`);
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
            window.removeEventListener("wheel", wheelListner);
        }
    } else {
        console.log("scrolling")
        if (event.deltaY > 0) {
            document.body.style.setProperty("--scrollList", `${scroll - 10}px`);
        }
        else {
            document.body.style.setProperty("--scrollList", `${scroll + 10}px`);
        }
    }
};


window.addEventListener('scroll', e => {
    document.body.style.setProperty(`--scrollTop`, `${this.scrollY}px`);
    document.body.style.setProperty(`--rotationLogo`, `${this.scrollY / 10}deg`);

    if (navList == null) {
        document.querySelector("header nav ul").style.cssText = "";
        document.querySelector("header nav ul").classList.add("collapsedNavList")
    }
    
    if (Math.round(this.scrollY) == 0) {
        let ul = document.querySelector("header nav ul");
        ul.classList.remove("collapsedNavList")
        ul.style.cssText = `animation-iteration-count: 1;
            animation-name: expandList;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;`
    }

    if (middleLayer.getBoundingClientRect().bottom <= 0 &&
        lastLayer.getBoundingClientRect().bottom >= 0) {
        window.addEventListener("wheel", wheelListner);
    }
});

document.querySelector("header .logo img").addEventListener('click', function() {
    var ul = document.querySelector("header nav ul");
    if (ul.classList.contains("collapsedNavList")){
        ul.classList.remove("collapsedNavList");
        ul.style.cssText = `animation-iteration-count: 1;
            animation-name: expandList;
            animation-duration: 1s;
            animation-fill-mode: forwards;`
    } else {
        ul.style.cssText = "";
        ul.classList.add("collapsedNavList");
    }
});