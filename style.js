////////////////////////// NAV BAR ////////////////////////////

let lastScroll = 0;
        const nav = document.querySelector("nav");

        window.addEventListener("scroll", () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > lastScroll) {
                // scrolleando hacia abajo
                nav.classList.add("nav-hidden");

            } else {
                // scrolleando hacia arriba
                nav.classList.remove("nav-hidden");
            }

            lastScroll = currentScroll;
        });


////////////////////////// CARRUSEL ////////////////////////////

const vets = [
  { img: "IMG/VETS/vet-1.png", nombre: "Marta Torres",  rol: "Cirujana veterinaria" },
  { img: "IMG/VETS/vet-2.png", nombre: "Martin Ramirez", rol: "Veterinario general" },
  { img: "IMG/VETS/vet-3.png", nombre: "Sofía Gonzalez", rol: "Auxiliar de veterinario" },
  { img: "IMG/VETS/vet-5.png", nombre: "Carlos Gutierrez", rol: "Fisioterapeuta veterinario" }
];


// Referencias al DOM
const imgEl    = document.getElementById("vet-img");
const nombreEl = document.getElementById("vet-nombre");
const rolEl    = document.getElementById("vet-rol");

const izqBtn = document.querySelector(".arrow-i");
const derBtn = document.querySelector(".arrow-d");

let index = 0; 

// Función para mostrar un profesional

function mostrarVet(i){
  const vet = vets[i];
  imgEl.src = vet.img;
  imgEl.alt = vet.nombre;
  nombreEl.textContent = vet.nombre;
  rolEl.textContent = vet.rol;
}

// Eventos de las flechas
izqBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = vets.length - 1; // vuelve al último
  }
  mostrarVet(index);
});

derBtn.addEventListener("click", () => {
  index++;
  if (index >= vets.length) {
    index = 0; // vuelve al primero
  }
  mostrarVet(index);
});

// Inicializar
mostrarVet(index);
