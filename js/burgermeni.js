 const burgerIcon = document.querySelector('.navbar-burger');
 //selektuj burger ikonicu
    const navbarMenu = document.querySelector('.navbar-menu');
//selektuj meni navigacije
    const navbarLinks = document.querySelectorAll('#navbar-links .navbar-item');
//selektuj sve linkove
    burgerIcon.addEventListener('click', () => {//na klik
        navbarMenu.classList.toggle('is-active'); 
        //prikazi ili sakrij meni
        navbarLinks.forEach(link => {
            link.classList.toggle('is-fullwidth');
//kada meni otvoren punu širinu roditeljskog kontejnera
        });
    });   

