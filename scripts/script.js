window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px;
        --rotationLogo: ${this.scrollY / 10}deg`;

    var navList = document.querySelector(".collapsedNavList")
    if (navList == null) {
        document.querySelector("header nav ul").style.cssText = "";
        document.querySelector("header nav ul").classList.add("collapsedNavList")
    }  else if (Math.round(this.scrollY) == 0) {
        let ul = document.querySelector("header nav ul");
        ul.classList.remove("collapsedNavList")
        ul.style.cssText = `animation-iteration-count: 1;
            animation-name: expandList;
            animation-duration: 0.5s;
            animation-fill-mode: forwards;`
    }
});

document.querySelector("header .logo img").addEventListener('click', function() {
    console.log("hi")
    let ul = document.querySelector("header nav ul");
    ul.classList.remove("collapsedNavList")
    ul.style.cssText = `animation-iteration-count: 1;
        animation-name: expandList;
        animation-duration: 1s;
        animation-fill-mode: forwards;`
});