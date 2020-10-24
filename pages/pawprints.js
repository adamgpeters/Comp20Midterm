



/*  */

/* First create the pawprints */

for (let i = 0; i < 10; i++) {
    $('#pawprints').append('<img class="paw" id="paw-' + i + '" style="transition: .3s;opacity:0;position: absolute;width: 5%;" src="../assets/pawprint.png" />');
}

var w = $('#pawprints').width();
var h = $('#pawprints').height();
$('.paw').each(function (i) {
    let vertOffset = Math.random() * h / 4 + h / 8;
    var func = 0;
    var rotate = 90;
    if (i < 4){
        func = -1 * i * h / 6 + h / 6;
        rotate = Math.random() * 30 + 90;
    } else if (i > 6) {
        func = -1 * (i-3) * h / 6 + h / 6;
        rotate = Math.random() * 30 + 90;
    } else {
        rotate = Math.random() * 30 + 75;
    }



    $(this).css({ 'transform': 'rotate(' + rotate + "deg)" });
    if (i % 2 == 0) {
        $(this).css({ 'top': '' + (h / 2.0 - vertOffset - func) + "px" });
    } else {
        $(this).css({ 'top': '' + (h / 2.0 + vertOffset - func) + "px" });
    }

    $(this).css({ 'left': '' + (w / 10.0 * i + $(this).width() / 2.0) + "px" });
});

function showPrints() {
    $('.paw').each( function(i) {
        setTimeout(() => {  
            $(this).css({'opacity':'1'});
        }, i * 200)
    });
}

$(document).ready(function () {
    // hideIfBelow();
    /* Every time the window is scrolled ... */

    
    $(window).scroll(function () {
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > $('#pawprints').position().top + 75) {
            showPrints();
        }
    });

});
