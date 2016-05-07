$("td").each(function() {
    if(this.innerHTML.match(/^[0-9|.]+$/g) != null) {
        this.style.textAlign = "right";
    }
});

setTimeout(function() {
    $(".jx-chtml, .MathJax_CHTML")
        .css("margin", "0 0.2em")
        .css("font-size", "100%");
    // MathjaxがCSSを上書きするので、それが終わってから
}, 2000);
