function rightAlign() {
    $("td").each(function() {
        if(this.innerHTML.match(/^[0-9|.]+$/g) != null) {
            this.style.textAlign = "right";
        }
    });
}

function tweakMathjax() {
    $(".jx-chtml, .MathJax_CHTML")
        .css("font-size", "110%");
    $(".MJXc-display")
        .css("font-size", "120%");
    $(".mjx-sub .mjx-char")
        .css("transform", "scale(0.8)");
}

rightAlign();
tweakMathjax();
