const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type === 'touchstart') event.preventDefault();
    const nav_ham = document.getElementById('nav-ham');
    nav_ham.classList.toggle('active');
   
    /*Acessibilidade(ARIA) */
    const active = nav_ham.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded',active);

    /*falando se o menu esta aberto ou nao*/
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);