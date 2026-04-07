// La "cornice" magica: aspetta che tutto l'HTML sia caricato prima di partire!
document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // --- GESTIONE MENU MOBILE ---
  // ==========================================
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const links = document.querySelectorAll(".mobile-link");

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
  // --- FUNZIONE PER GESTIRE I MODALI SPORT ---
  // ==========================================
  function setupModal(sportName) {
    const btn = document.getElementById(`btn-${sportName}`);
    const modal = document.getElementById(`modal-${sportName}`);
    const close = document.getElementById(`close-${sportName}`);

    const tabOrari = document.getElementById(`btn-tab-orari-${sportName}`);
    const tabPrezzi = document.getElementById(`btn-tab-prezzi-${sportName}`);
    const contentOrari = document.getElementById(`content-orari-${sportName}`);
    const contentPrezzi = document.getElementById(`content-prezzi-${sportName}`);

    // 1. Apri/Chiudi Modale
    if (btn && modal && close) {
      btn.addEventListener("click", () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      });

      close.addEventListener("click", () => {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.classList.remove("flex");
          modal.classList.add("hidden");
        }
      });
    }

    // 2. Cambia Schede (Tabs)
    if (tabOrari && tabPrezzi && contentOrari && contentPrezzi) {
      tabOrari.addEventListener("click", () => {
        contentOrari.classList.remove("hidden");
        contentPrezzi.classList.add("hidden");
        tabOrari.className = "rounded-xl bg-sky-500 px-6 py-2 font-russo tracking-wide text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all";
        tabPrezzi.className = "rounded-xl bg-white/10 px-6 py-2 font-russo tracking-wide text-white transition-all hover:bg-white/20";
      });

      tabPrezzi.addEventListener("click", () => {
        contentPrezzi.classList.remove("hidden");
        contentOrari.classList.add("hidden");
        tabPrezzi.className = "rounded-xl bg-sky-500 px-6 py-2 font-russo tracking-wide text-white shadow-[0_0_15px_rgba(56,189,248,0.4)] transition-all";
        tabOrari.className = "rounded-xl bg-white/10 px-6 py-2 font-russo tracking-wide text-white transition-all hover:bg-white/20";
      });
    }
  }

  // ==========================================
  // --- ATTIVIAMO TUTTI I MODALI! ---
  // ==========================================
  setupModal("judo"); 
  setupModal("kick");
  setupModal("kungfu");
  setupModal("ginnastica");

}); // Fine della "cornice" magica