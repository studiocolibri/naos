if(!('IntersectionObserver' in window)) {
    console.log('intersectionObserver not supported');
    var observedItems = document.getElementsByClassName('observed');
    var observedItemsLength = observedItems.length;
    for (var i=0; i < observedItemsLength; i++) {
        observedItems[i].classList.add('is-visible');
    }
} else {
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
			if(entry.intersectionRatio > 0.5) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, {threshold: 0.85});
	document.querySelectorAll('.observed').forEach(obj => { observer.observe(obj) });
}
