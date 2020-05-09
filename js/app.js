const menuIzquierdo = document.querySelector('.menu-izquierdo');

menuIzquierdo.addEventListener('click', (e)  => {
       const claseMenu = e.target.classList;
       
       // Selecciona las flechas y la pagina
       const contenedor = document.querySelector('.pagina'),
             flechaIzq = document.querySelector('.fa-arrow-left'),
             flechaDer = document.querySelector('.fa-arrow-right');

       if(claseMenu.contains('fa-arrow-left') ) {
            // cerrar el menú lateral
            e.target.style.display = 'none';
            flechaDer.style.display = 'block';
            contenedor.classList.add('no-menu');

            //abrir el menu lateral
       } else if( claseMenu.contains('fa-arrow-right')) {
            contenedor.classList.remove('no-menu');
            e.target.style.display = 'none';
            flechaIzq.style.display = 'block';
       }
});

