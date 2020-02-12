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
		threshold: 0.2
	};
	let observer = new IntersectionObserver( function(entries, observer) {
		for (var i=0; i < entries.length; i++) {
			let entry = entries[i];
			if(entry.intersectionRatio > 0) {
				entry.target.classList.add('is-visible');
				observer.unobserve(entry.target);
			}
		}
	}, config);
	let observed = document.querySelectorAll('.observed');
	for (var i=0; i < observed.length; i++) {
		observer.observe(observed[i]);
	}
}