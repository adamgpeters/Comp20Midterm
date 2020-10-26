
for (let i = 0; i < 10; i++) {
    $('#pawprints').append('<img class="paw" id="paw-' + i + '" style="transition: .3s;opacity:0;position: absolute;width: 5%;" src="../assets/pawprint.png" />');
}

var containerWidth = $('#pawprints').width();
var containerHeight = $('#pawprints').height();
$('.paw').each(function (i) {
    let vertOffset = Math.random() * containerHeight / 4 + containerHeight / 8;
    var legOffset = 0;
    var rotate = 90;
    if (i < 4) {
        legOffset = -1 * i * containerHeight / 6 + containerHeight / 6;
        rotate = Math.random() * 30 + 90;
    } else if (i > 6) {
        legOffset = -1 * (i - 3) * containerHeight / 6 + containerHeight / 6;
        rotate = Math.random() * 30 + 90;
    } else {
        rotate = Math.random() * 30 + 75;
    }

    $(this).css({ 'transform': 'rotate(' + rotate + "deg)" });
    if (i % 2 == 0) {
        $(this).css({ 'top': '' + (containerHeight / 2.0 - vertOffset - legOffset) + "px" });
    } else {
        $(this).css({ 'top': '' + (containerHeight / 2.0 + vertOffset - legOffset) + "px" });
    }

    $(this).css({ 'left': '' + (containerWidth / 10.0 * i + $(this).width() / 2.0) + "px" });
});

function showPrints() {
    $('.paw').each(function (i) {
        setTimeout(() => {
            $(this).css({ 'opacity': '1' });
        }, i * 200)
    });
}

$(document).ready(function () {

    $(window).scroll(function () {
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if (bottom_of_window > $('#pawprints').position().top + 75) {
            showPrints();
        }
    });
});
