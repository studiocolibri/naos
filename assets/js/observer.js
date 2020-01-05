if(!('IntersectionObserver' in window)) {
    console.log('intersectionObserver not supported');
    var observedItems = document.getElementsByClassName('observed');
    var observedItemsLength = observedItems.length;
    for (var i=0; i < observedItemsLength; i++) {
        observedItems[i].classList.add('is-visible');
    }
} else {
	let config = {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	};
	let observer = new IntersectionObserver((entries, observer) => { 
		entries.forEach(entry => {
			if(entry.intersectionRatio > 0) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		});
	}, config);
	document.querySelectorAll('.observed').forEach(obj => { observer.observe(obj) });
}