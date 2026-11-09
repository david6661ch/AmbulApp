(() => {
  const mount = document.getElementById("ambul-header");
  if (!mount) {
    return;
  }

  const onPagesPath = /\/paginas\//i.test(window.location.pathname);
  const pagesPrefix = onPagesPath ? "" : "paginas/";
  const homeHref = onPagesPath ? "../index.html" : "index.html";

  mount.innerHTML = `
    <header class="ambul-header">
      <div class="ambul-header__inner">
        <a class="ambul-header__brand" href="${homeHref}" aria-label="Ambul-app, inicio">
          <span class="ambul-header__mark" aria-hidden="true">A</span>
          <span>Ambul-<span class="ambul-header__brand-app">app</span></span>
        </a>
        <button class="ambul-header__toggle" type="button" aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="ambul-header-menu">
          <span class="ambul-header__toggle-lines" aria-hidden="true"></span>
        </button>
        <div class="ambul-header__menu" id="ambul-header-menu">
          <nav class="ambul-header__nav" aria-label="Navegación principal">
            <a class="ambul-header__link" data-page="inicio" href="${homeHref}">Inicio</a>
            <a class="ambul-header__link" data-page="servicios" href="${pagesPrefix}precios.html#servicios">Servicios</a>
            <a class="ambul-header__link" data-page="tarifas" href="${pagesPrefix}precios.html#tarifas">Tarifas</a>
            <a class="ambul-header__link" data-page="reservar" href="${pagesPrefix}reserva.html">Reservar</a>
          </nav>
          <div class="ambul-header__actions">
            <a class="ambul-header__login" href="${pagesPrefix}login.html">Iniciar sesión</a>
            <a class="ambul-header__book" href="${pagesPrefix}reserva.html">Reservar transporte</a>
          </div>
        </div>
      </div>
    </header>`;

  const menu = mount.querySelector(".ambul-header__menu");
  const toggle = mount.querySelector(".ambul-header__toggle");
  const links = mount.querySelectorAll(".ambul-header__link");
  const currentPath = window.location.pathname.toLowerCase();
  const currentHash = window.location.hash.toLowerCase();
  let activePage = "";

  if (currentPath.includes("precios.html")) {
    activePage = currentHash === "#servicios" ? "servicios" : "tarifas";
  } else if (currentPath.includes("reserva.html")) {
    activePage = "reservar";
  } else if (!onPagesPath || currentPath.endsWith("/index.html")) {
    activePage = "inicio";
  }

  links.forEach((link) => {
    if (link.dataset.page === activePage) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  const closeMenu = () => {
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menú de navegación");
  };

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    menu.classList.toggle("is-open", !isOpen);
    toggle.setAttribute("aria-expanded", String(!isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Abrir menú de navegación" : "Cerrar menú de navegación");
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("click", (event) => {
    if (!mount.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      closeMenu();
      toggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
})();
