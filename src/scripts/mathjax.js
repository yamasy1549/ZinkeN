$("td").each(function() {
    if(this.innerHTML.match(/\d/g) != null) {
        this.style.textAlign = "right";
    }
});

setTimeout(function() {
    $(".jx-chtml, .MathJax_CHTML").css("margin", "0 0.2em");
    // MathjaxがCSSを上書きするので、それが終わってから
}, 2000);
