// La "cornice" magica: aspetta che tutto l'HTML sia caricato prima di partire!
document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // --- GESTIONE MENU MOBILE ---
  // ==========================================
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-link");

  // Il "salvagente": procedi solo se trovi il bottone e il menu nella pagina
  if (btn && menu) {
    // Apri/Chiudi il menu cliccando sull'hamburger
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
      menu.classList.toggle("flex");
    });

    // Chiudi automaticamente il menu quando si clicca su un link
    links.forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.add("hidden");
        menu.classList.remove("flex");
      });
    });
  }

  // ==========================================
  // --- GESTIONE MODALE JUDO ---
  // ==========================================
  const btnJudo = document.getElementById("btn-judo");
  const modalJudo = document.getElementById("modal-judo");
  const closeJudo = document.getElementById("close-judo");

  if (btnJudo && modalJudo && closeJudo) {
    // Apri modale quando clicchi sulla foto del Judo
    btnJudo.addEventListener("click", () => {
      modalJudo.classList.remove("hidden");
    });

    // Chiudi modale quando clicchi sulla 'X'
    closeJudo.addEventListener("click", () => {
      modalJudo.classList.add("hidden");
    });

    // Chiudi modale se clicchi fuori dalla scatola (sullo sfondo scuro)
    modalJudo.addEventListener("click", (e) => {
      if (e.target === modalJudo) {
        modalJudo.classList.add("hidden");
      }
    });
  }

  // ==========================================
  // --- GESTIONE TABS (Orari / Prezzi) JUDO ---
  // ==========================================
  const btnTabOrariJudo = document.getElementById("btn-tab-orari-judo");
  const btnTabPrezziJudo = document.getElementById("btn-tab-prezzi-judo");
  const contentOrariJudo = document.getElementById("content-orari-judo");
  const contentPrezziJudo = document.getElementById("content-prezzi-judo");

  if (btnTabOrariJudo && btnTabPrezziJudo) {
    // Cosa succede se clicchi su ORARI
    btnTabOrariJudo.addEventListener("click", () => {
      // 1. Mostro gli orari e nascondo i prezzi
      contentOrariJudo.classList.remove("hidden");
      contentPrezziJudo.classList.add("hidden");

      // 2. Accendo il bottone orari (azzurro) e spengo i prezzi (grigio)
      btnTabOrariJudo.className =
        "rounded-xl bg-sky-500 px-6 py-2 font-russo tracking-wide text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all";
      btnTabPrezziJudo.className =
        "rounded-xl bg-white/10 px-6 py-2 font-russo tracking-wide text-white transition-all hover:bg-white/20";
    });

    // Cosa succede se clicchi su PREZZI
    btnTabPrezziJudo.addEventListener("click", () => {
      // 1. Mostro i prezzi e nascondo gli orari
      contentPrezziJudo.classList.remove("hidden");
      contentOrariJudo.classList.add("hidden");

      // 2. Accendo il bottone prezzi (azzurro) e spengo gli orari (grigio)
      btnTabPrezziJudo.className =
        "rounded-xl bg-sky-500 px-6 py-2 font-russo tracking-wide text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all";
      btnTabOrariJudo.className =
        "rounded-xl bg-white/10 px-6 py-2 font-russo tracking-wide text-white transition-all hover:bg-white/20";
    });
  }
}); // Fine della "cornice" magica
