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
