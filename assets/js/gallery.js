const allGalleryItems = Array.from(document.querySelectorAll('.gallery_item'));

allGalleryItems.forEach((item) => {
    item.addEventListener('pointermove', function(event) {
        if (event.pointerType !== "mouse") {return;}
        handleMouseMove(event, this);
    });
    item.addEventListener('pointerleave', function(event) {
      if (event.pointerType !== "mouse") {return;}
        handleMouseLeave(this);
    });
});

function handleMouseMove(event, item) {
    let img = item.querySelector('.gallery_item_img');
    let highRes = img.getAttribute('data-high');
    let zoomWindow = item.querySelector('.gallery_item_zoom-window');
    if (!highRes) return;
    zoomWindow.style.backgroundImage = `url(${highRes})`;
    zoomWindow.style.display = 'block';
    
    let rect = img.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    
    let zoomX = (x / rect.width) * 100;
    let zoomY = (y / rect.height) * 100;
    
    zoomWindow.style.left = `${x}px`;
    zoomWindow.style.top = `${y}px`;
    zoomWindow.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
}

function handleMouseLeave(item) {
    let zoomWindow = item.querySelector('.gallery_item_zoom-window');
    zoomWindow.style.display = 'none';
}