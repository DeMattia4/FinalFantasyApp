var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.paddingTop = "0px";
            panel.style.paddingBottom = "0px";
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.paddingTop = "10px";
            panel.style.paddingBottom = "10px";
        }
    });
}
export {};
//# sourceMappingURL=main.js.map