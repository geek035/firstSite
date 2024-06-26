var navList = document.querySelector(".collapsedNavList");

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