(() => {
  const mount = document.getElementById("ambul-footer");
  if (!mount) {
    return;
  }

  const pagesPrefix = /\/paginas\//i.test(window.location.pathname) ? "" : "paginas/";
  const homeHref = /\/paginas\//i.test(window.location.pathname) ? "../index.html" : "index.html";
  const pricesHref = `${pagesPrefix}precios.html`;
  const bookingHref = `${pagesPrefix}reserva.html`;
  const supportEmail = "mailto:ayuda@ambulapp.co";

  mount.innerHTML = `
    <footer class="ambul-footer">
      <div class="ambul-footer__content">
        <section class="ambul-footer__identity" aria-label="Ambul-app">
          <a class="ambul-footer__brand" href="${homeHref}">
            <span class="ambul-footer__mark" aria-hidden="true">A</span>
            <span>Ambul-app</span>
          </a>
          <p class="ambul-footer__description">Movilidad asistencial humana, segura y oportuna en el Valle de Aburrá.</p>
          <div class="ambul-footer__socials" role="group" aria-label="Redes sociales">
            <span class="ambul-footer__social" aria-label="Instagram">
              <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" stroke-width="2"></rect><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"></circle><circle cx="17.5" cy="6.8" r="1.2"></circle></svg>
            </span>
            <span class="ambul-footer__social" aria-label="Facebook">f</span>
            <span class="ambul-footer__social" aria-label="LinkedIn">in</span>
          </div>
        </section>

        <nav class="ambul-footer__column" aria-label="Explora">
          <h2>Explora</h2>
          <ul class="ambul-footer__links">
            <li><a href="${homeHref}">Inicio</a></li>
            <li><a href="${pricesHref}">Servicios y tarifas</a></li>
            <li><a href="${bookingHref}">Reservar traslado</a></li>
          </ul>
        </nav>

        <section class="ambul-footer__column" aria-labelledby="ambul-footer-information">
          <h2 id="ambul-footer-information">Información</h2>
          <ul class="ambul-footer__links">
            <li><a href="${supportEmail}?subject=T%C3%A9rminos%20y%20condiciones">Términos y condiciones</a></li>
            <li><a href="${supportEmail}?subject=Pol%C3%ADtica%20de%20privacidad">Política de privacidad</a></li>
            <li><a href="${supportEmail}?subject=PQRS">PQRS</a></li>
          </ul>
        </section>

        <section class="ambul-footer__column" aria-labelledby="ambul-footer-contact">
          <h2 id="ambul-footer-contact">Contáctanos</h2>
          <ul class="ambul-footer__contact-list">
            <li>
              <a class="ambul-footer__contact" href="tel:+57604441020">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3.5h3l1.5 4-2 1.6a15 15 0 0 0 7.4 7.4l1.6-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A17.5 17.5 0 0 1 3.5 5.1 1.5 1.5 0 0 1 5 3.5Z"></path></svg>
                <span>(604) 444 10 20</span>
              </a>
            </li>
            <li>
              <a class="ambul-footer__contact" href="${supportEmail}">
                <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m4 7 8 6 8-6"></path></svg>
                <span>ayuda@ambulapp.co</span>
              </a>
            </li>
            <li>
              <a class="ambul-footer__contact" href="https://www.google.com/maps/search/?api=1&amp;query=Medell%C3%ADn%2C%20Antioquia" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 10.2c0 5-7 11-7 11s-7-6-7-11a7 7 0 1 1 14 0Z"></path><circle cx="12" cy="10" r="2.3"></circle></svg>
                <span>Medellín, Antioquia</span>
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div class="ambul-footer__bottom">
        <p>© 2025 Ambul-app. Todos los derechos reservados.</p>
        <p>Servicio de transporte asistencial programado.</p>
      </div>
    </footer>`;
})();
