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

var btnPrev = document.createElement('button');
btnPrev.className = 'gallery_btn prev';
btnPrev.id = 'galleryPrev';
btnPrev.innerHTML = '<';

var btnNext = document.createElement('button');
btnNext.className = 'gallery_btn next';
btnNext.id = 'galleryNext';
btnNext.innerHTML = '>';

document.getElementById("gallery").append(btnPrev);
document.getElementById("gallery").append(btnNext);

document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'galleryPrev'){
        gallery.prev();
    }
    if(e.target && e.target.id== 'galleryNext'){
        gallery.next();
    }
});