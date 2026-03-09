// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80
});

// DOM Elements
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const searchInput = document.getElementById('searchBerita');
const beritaContainer = document.getElementById('beritaContainer');
const noResult = document.getElementById('noResult');
const totalBerita = document.getElementById('totalBerita');
const filterButtons = document.querySelectorAll('.filter-btn');
const beritaItems = document.querySelectorAll('.berita-item');

let currentCategory = 'semua';

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  mobileMenu.classList.toggle('hidden');
});

// Filter items based on category and search term
function filterItems() {
  const searchTerm = searchInput.value.toLowerCase();
  let visibleCount = 0;

  beritaItems.forEach((item) => {
    const category = item.dataset.category;
    const title = item.querySelector('h3')?.textContent.toLowerCase() || '';
    const content = item.querySelector('.text-slate-600')?.textContent.toLowerCase() || '';
    
    const matchesCategory = currentCategory === 'semua' || category === currentCategory;
    const matchesSearch = title.includes(searchTerm) || content.includes(searchTerm);
    
    if (matchesCategory && matchesSearch) {
      item.style.display = '';
      visibleCount++;
    } else {
      item.style.display = 'none';
    }
  });

  totalBerita.textContent = visibleCount;
  
  if (visibleCount === 0) {
    beritaContainer.classList.add('hidden');
    noResult.classList.remove('hidden');
  } else {
    beritaContainer.classList.remove('hidden');
    noResult.classList.add('hidden');
  }
}

// Filter by category
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    currentCategory = btn.dataset.category;
    
    filterButtons.forEach((b) => {
      b.classList.remove('active', 'bg-brand-600', 'text-white', 'border-brand-600');
      b.classList.add('bg-white', 'text-slate-700', 'border-slate-300');
    });
    
    btn.classList.add('active', 'bg-brand-600', 'text-white', 'border-brand-600');
    btn.classList.remove('bg-white', 'text-slate-700', 'border-slate-300');
    
    filterItems();
  });
});

// Search functionality
searchInput.addEventListener('input', filterItems);
