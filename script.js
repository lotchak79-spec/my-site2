window.addEventListener('scroll', function() {
    var image = document.querySelector('.features img.centered-image');
    if (image) {
        var scrolled = window.pageYOffset;
        image.style.transform = 'translate3d(0, ' + (scrolled * 0.25) + 'px, 0)';
    }
});
