
function changeTab(tabNumber) {
    // Sakrij sve tabove
    document.querySelectorAll('.tab-content').forEach(function (tabContent) {
        tabContent.style.display = 'none';
    });

    // deaktiviraj sve tabove
    document.querySelectorAll('.tabs li').forEach(function (tab) {
        tab.classList.remove('is-active');
    });

    //prikazi selektovani tab i njegov sadržaj
    document.getElementById(`content${tabNumber}`).style.display = 'block';
    document.getElementById(`tab${tabNumber}`).classList.add('is-active');
}