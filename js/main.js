/**
 * Renderizado de las tarjetas en la página principal
 * Guarderías Ebor Querétaro
 */
document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("lista-guarderias");

    if (!contenedor || typeof guarderias === "undefined") {
        return;
    }

    contenedor.innerHTML = "";

    guarderias.forEach(guarderia => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "tarjeta-guarderia";
        tarjeta.dataset.plantel = guarderia.id;
        tarjeta.style.setProperty("--color-acento", guarderia.colorHex);
        tarjeta.style.setProperty("--color-acento-bg", guarderia.colorBg);
        tarjeta.style.setProperty("--color-acento-borde", guarderia.colorBorde);

        tarjeta.innerHTML = `
            <a href="pages/guarderia.html?id=${encodeURIComponent(guarderia.id)}" class="tarjeta-imagen-enlace" aria-label="Ver detalles de guardería ${guarderia.nombre}">
                <div class="tarjeta-imagen-contenedor">
                    <img src="${guarderia.imagen}" alt="Fachada Guardería ${guarderia.nombre}" class="tarjeta-foto" loading="lazy">
                </div>
            </a>
            <div class="tarjeta-cuerpo">
                <h3 class="tarjeta-titulo">
                    <a href="pages/guarderia.html?id=${encodeURIComponent(guarderia.id)}">${guarderia.nombre}</a>
                </h3>
                <div class="tarjeta-codigo">
                    <span class="codigo-etiqueta">
                        <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                            <path d="M7 8h10M7 12h4m-4 4h10"></path>
                        </svg>
                        <span>Código IMSS</span>
                    </span>
                    <strong class="codigo-valor">${guarderia.codigo}</strong>
                </div>
                <div class="tarjeta-telefono">
                    <a href="tel:${guarderia.telefono}" class="telefono-link" aria-label="Llamar a ${guarderia.nombre} al ${guarderia.telefonoFormato}">
                        <svg class="icono-telefono" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        <span class="telefono-numero">${guarderia.telefonoFormato}</span>
                    </a>
                </div>
                <div class="tarjeta-pie">
                    <a href="pages/guarderia.html?id=${encodeURIComponent(guarderia.id)}" class="btn-conocer">
                        <span>Conocer guardería</span>
                        <svg class="icono-flecha" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        `;

        contenedor.appendChild(tarjeta);
    });
});
