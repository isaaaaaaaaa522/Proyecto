
  var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }
  });




  var swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 4, // muestra varias imágenes a la vez
    spaceBetween: 10,
    allowTouchMove: false, // para que no se detenga al arrastrar
    autoplay: {
      delay: 0, // sin pausas
      disableOnInteraction: false,
    },
    speed: 3000, // velocidad del movimiento continuo
  });



let marker = document.getElementById('marker');
let nav_links = document.querySelectorAll('nav ul li a');

function indicator(e) {
  marker.style.left = e.offsetLeft + 'px';
  marker.style.width = e.offsetWidth + 'px';
  marker.style.opacity = '1';
}

window.addEventListener('load', () => {
  let current = location.pathname.split('/').pop() || 'index.html';
  let activeLink = Array.from(nav_links).find(a => a.getAttribute('href') === current);
  
  if (activeLink) {
    indicator(activeLink);
  } else {
    marker.style.opacity = '0';
  }
});

document.getElementById("Brochure").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "BROCHURE GYT PROYECTOS 2025.pdf"; // Ruta del PDF
  link.download = "BROCHURE GYT PROYECTOS 2025.pdf"; // Nombre del archivo descargado
  link.click();
});





