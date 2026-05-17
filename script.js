window.addEventListener('scroll', function() {
    var image = document.querySelector('.features img.centered-image');
    if (image) {
        var scrollPosition = window.pageYOffset;
        // Двигаем картинку со скоростью в 3 раза медленнее основного скролла
        image.style.transform = 'translateY(' + (scrollPosition * 0.3) + 'px)';
    }
});
