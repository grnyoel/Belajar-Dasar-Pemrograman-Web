const burgerMenu = document.getElementById('burger-menu');
const navbar = document.getElementById('navbar');

// Mengatur klik pada tombol hamburger
burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navbar.classList.toggle('active');
});

const navbarLinks = document.querySelectorAll('.navbar a');

// Smooth scroll pada setiap tautan navbar
navbarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetSection = this.getAttribute('data-section');
    const targetElement = document.getElementById(targetSection);
    
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Menutup menu burger setelah mengklik section
    navbar.classList.remove('active');
    burgerMenu.classList.remove('active');
  });
});

// Dark mode toggle
const toggleCheckbox = document.querySelector('.toggle-checkbox');
const body = document.body;

// Simpan preferensi dark mode ke localStorage
toggleCheckbox.addEventListener('change', () => {
  if (toggleCheckbox.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Cek preferensi dark mode saat halaman dimuat
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  toggleCheckbox.checked = true;
}

// Function untuk mengecek suatu elemen berada dalam viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function untuk event scroll
function handleScroll() {
  const sections = document.querySelectorAll('.animate-section');
  sections.forEach(section => {
      if (section.id !== 'home' && isInViewport(section)) {
          section.classList.add('animate');
      }
  });
}

// Memicu animasi saat section masuk ke viewport
window.addEventListener('scroll', handleScroll);

handleScroll();