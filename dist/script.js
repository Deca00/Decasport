 const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

    // Apri/Chiudi il menu cliccando sull'hamburger
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.classList.toggle('flex');
    });

    // Chiudi automaticamente il menu quando si clicca su un link
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
      });
    });