var root = document.body,
	w = window.innerWidth,
	siteNavBtn = document.getElementById('site-nav-btn'),
	siteNavBtnIcon = document.getElementById('site-nav-btn__icon'),
	siteNavLinks = document.querySelectorAll('.site-nav__link'),
	resizeTimer;

siteNavBtn.addEventListener('click', function() {
	if (root.classList.contains('open')) {
		root.classList.remove('open');
		siteNavBtnIcon.innerHTML = '☰';
		setTabIndex(-1,siteNavLinks);
		this.setAttribute('aria-expanded', false);
	} else {
		root.classList.add('open');
		siteNavBtnIcon.innerHTML = 'X';
		setTabIndex(0,siteNavLinks);
		this.setAttribute('aria-expanded', true);
	}
})

function setTabIndex(index, array) {
	for (var i=0; i<array.length; i++) {
		array[i].setAttribute('tabindex', index);
	}
}

function toggleTabIndex(array, width) {
	if(window.innerWidth < width){
      setTabIndex(-1,array);
   }
   else{
       setTabIndex(0, array);
   }
}

window.addEventListener("resize", function(){
	clearTimeout(resizeTimer);
	resizeTimer = setTimeout(function() {
   		toggleTabIndex(siteNavLinks, 980);
	}, 300);
});