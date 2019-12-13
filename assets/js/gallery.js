const gallery = new Siema({
    selector: '.gallery_slider',
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
});    

document.querySelector('.prev').addEventListener('click', () => gallery.prev());
document.querySelector('.next').addEventListener('click', () => gallery.next());

/* var w = window.innerWidth,
    perPage = 0,
    resizeTimer,
    gallery;

function configureGallery(pageCount) {
    
    gallery = new Siema({
        selector: '.gallery_slider',
        duration: 200,
        easing: 'ease-out',
        perPage: 1,
        startIndex: 0,
        draggable: true,
        multipleDrag: true,
        threshold: 20,
        loop: true,
        rtl: false,
        perPage: pageCount,
        onInit: () => {},
        onChange: () => {},
    });    

    document.querySelector('.prev').addEventListener('click', () => gallery.prev());
    document.querySelector('.next').addEventListener('click', () => gallery.next());
}

function activateGallery() {
    w = window.innerWidth;
    if (w <= 980) {
        configureGallery(1);
    } else {
        configureGallery(2);
    }
}

activateGallery();

window.addEventListener("resize", function(){
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
        console.log('test 1');
        activateGallery();
        console.log('test 2');
	}, 300);
}); */
