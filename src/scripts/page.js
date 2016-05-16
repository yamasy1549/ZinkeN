var PAGE_HEIGHT = $(".cover").height() * 0.84;
var size = 0;
var parent = $(".pages *:first");
var elem = parent;

function overHeight(size, elemHeight) {
    return (size + elemHeight) > PAGE_HEIGHT
};

function hasChildren(elem) {
    return elem.children().length > 0
};

function hasSiblings(elem) {
    return elem.next().length > 0
};

function hasParent(elem) {
    return elem.parent().length > 0
};

function isAvoided(elem) {
    return elem.css("page-break-inside") == "avoid"
}

function markNextPageContents(elem) {
    size += elem.outerHeight(true);
    elem.addClass("wrap");
}

function newPage() {
    $(".wrap").wrapAll("<div class='page'>");
    $(".wrap").removeClass("wrap");
    size = 0;
};

function checkElements() {
    if(elem.attr("class") == "page") {
        newPage();
        elem = elem.next();
    };

    if(isAvoided(elem)) {
        if(overHeight(size, elem.outerHeight(true))) {
            newPage();
        }

        markNextPageContents(elem);

        if(hasSiblings(elem)) {
            elem = elem.next();
            checkElements();
        } else if(hasSiblings(parent)) {
            parent = parent.next();
            elem = parent;
            checkElements();
        } else {
            while(!hasSiblings(elem)) {
                elem = elem.parent();
            }
            elem = elem.next();
            checkElements();
        }
    }

    if(overHeight(size, elem.outerHeight(true))) {
        if(hasChildren(elem)) {
            parent = elem;
            elem = elem.children(":first");
            checkElements();
        } else {
            newPage();
            checkElements();
        }
    } else {
        markNextPageContents(elem);

        if(hasSiblings(elem)) {
            elem = elem.next();
            checkElements();
        } else if(hasSiblings(parent)) {
            parent = parent.next();
            elem = parent;
            checkElements();
        } else if(hasParent(elem)) {
            parent = elem.parent().next();
            elem = parent;
            checkElements();
        }
    }
}
