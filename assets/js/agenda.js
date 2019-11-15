var agendaContent = document.getElementById('agenda-content');
var agendaFilters = document.querySelectorAll('.agenda-filter');
var deleteFilters = document.getElementById('delete-filters');
var filterWrapper = document.getElementById('agenda__filter-wrapper');
var filterText = document.getElementById('agenda__filter-text');
var errorMsg = "Désolé, il n'y a aucun événement futur correspondant à vos critères.";

for (var i = 0; i < agendaFilters.length; i++) {
    agendaFilters[i].addEventListener('click', function() {
        deleteFilters.style.display = "block";
        var filter = this.dataset.filter;
        var agendaItems = document.querySelectorAll('.agenda-list__item');
        var filteredItems = document.querySelectorAll('.agenda-list__item.'+filter);
        var errorText = document.getElementById('agenda-error');
        filterWrapper.style.display = "block";

        switch (filter) {
            case "cours" :
                filterText.innerHTML = "les cours collectifs";
                break;
            case "ateliers" :
                filterText.innerHTML = "les ateliers";
                break;
            case "stages" :
                filterText.innerHTML = "les stages";
                break;
            case "retraites" :
                filterText.innerHTML = "les retraites";
                break;
        }

        function filterItems() {
            for (var i = 0; i < agendaFilters.length; i++) {
                agendaItems[i].style.display = 'none';
            }
            for (var i = 0; i < filteredItems.length; i++) {
                filteredItems[i].style.display = 'block';
            }
        }
        
        if (filteredItems.length == 0) {
            filterItems();
            if (!errorText) {
                var errorEl = document.createElement('p');
                errorEl.innerHTML = errorMsg;
                errorEl.id = 'agenda-error';
                agendaContent.appendChild(errorEl);
            }
            
        } else {
            filterItems();
            errorText.parentElement.removeChild(errorText);
        }
    });
}

deleteFilters.addEventListener('click', function() {
    var agendaItems = document.querySelectorAll('.agenda-list__item');
    for (var i = 0; i < agendaFilters.length; i++) {
        agendaItems[i].style.display = 'block';
    }
    deleteFilters.style.display = "none";
    filterWrapper.style.display = "none";
    var errorText = document.getElementById('agenda-error');
    errorText.parentElement.removeChild(errorText);
});