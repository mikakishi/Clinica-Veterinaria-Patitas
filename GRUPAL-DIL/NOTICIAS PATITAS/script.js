// ================================
// DATOS DE LAS NOTICIAS
// ================================
const noticias = [
    {
        animal: "perro",
        titulo: "Vacunación Canina",
        resumen: "Campaña anual de vacunación para perritos.",
        texto: "Información completa sobre la vacunación canina, cuidados posteriores, fechas disponibles y recomendaciones médicas.",
        imagen: "img/vacunacion.jpg",
        pdf: "pdf/vacunacioncanina.pdf"
    },
    {
        animal: "perro",
        titulo: "Cuidado Dental",
        resumen: "Salud bucal en perros.",
        texto: "Consejos profesionales para mantener una correcta higiene dental en perros y prevenir enfermedades.",
        imagen: "img/dentalperro.jpg",
        pdf: "pdf/cuidadodentalperro.pdf"
    },
    {
        animal: "gato",
        titulo: "Chequeo Felino",
        resumen: "Control preventivo anual.",
        texto: "Chequeos médicos completos para gatos, control de peso, vacunación y nutrición especializada.",
        imagen: "img/chequeofelino.jpg",
        pdf: "pdf/chequeogatito.pdf"
    },
    {
        animal: "gato",
        titulo: "Cuidados del Pelaje",
        resumen: "Salud del pelaje felino.",
        texto: "Recomendaciones para mantener el pelaje del gato saludable y prevenir problemas dermatológicos.",
        imagen: "img/pelaje.jpg",
        pdf: "pdf/pelaje.pdf"
    },
    {
        animal: "conejo",
        titulo: "Alimentación del Conejo",
        resumen: "Dieta saludable.",
        texto: "Guía completa sobre la alimentación correcta del conejo doméstico para una vida saludable.",
        imagen: "img/alimentacionconejo.jpg",
        pdf: "pdf/alimentacion.pdf"
    },
    {
        animal: "conejo",
        titulo: "Higiene y Hábitat",
        resumen: "Cuidados del entorno.",
        texto: "Consejos sobre limpieza, hábitat y bienestar general del conejo.",
        imagen: "img/habitat.jpg",
        pdf: "pdf/conejohabitat.pdf"
    }
];

// ================================
// ELEMENTOS DEL DOM
// ================================
const contenedor = document.getElementById("noticias");
const botonesFiltro = document.querySelectorAll(".filtro button");
const modal = document.getElementById("modal");
const cerrarModal = document.querySelector(".cerrar");

// ================================
// EVENTOS DE FILTRO
// ================================
botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
        const animal = boton.dataset.animal;
        mostrarNoticias(animal);
    });
});

// ================================
// FUNCIÓN MOSTRAR NOTICIAS
// ================================
function mostrarNoticias(animal) {
    contenedor.innerHTML = "";

    const noticiasFiltradas = animal === "todas"
        ? noticias
        : noticias.filter(noticia => noticia.animal === animal);

    noticiasFiltradas.forEach(noticia => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${noticia.imagen}" alt="${noticia.titulo}">
            <h3>${noticia.titulo}</h3>
            <p>${noticia.resumen}</p>
            <button class="btn">Ver más</button>
        `;

        card.querySelector(".btn").addEventListener("click", () => {
            abrirModal(noticia);
        });

        contenedor.appendChild(card);
    });
}

// ================================
// FUNCIÓN ABRIR MODAL
// ================================
function abrirModal(noticia) {
    modal.style.display = "flex";
    document.getElementById("modalTitulo").textContent = noticia.titulo;
    document.getElementById("modalTexto").textContent = noticia.texto;
    document.getElementById("modalPdf").href = noticia.pdf;
}

// ================================
// CERRAR MODAL
// ================================
cerrarModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", e => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// ================================
// MOSTRAR TODAS AL CARGAR
// ================================
mostrarNoticias("todas");