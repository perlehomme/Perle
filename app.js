
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
const filters = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.product-card');
const bookingForm = document.getElementById('bookingForm');
const whatsappNumber = '212700469429';

let currentTheme = 'light';
root.setAttribute('data-theme', currentTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', currentTheme);
    themeToggle.textContent = currentTheme === 'light' ? '☾' : '☀';
  });
}

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('open'));
  });
}

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;

    cards.forEach(card => {
      const category = card.dataset.category;
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const category = document.getElementById('category').value;
    const model = document.getElementById('model').value.trim();
    const size = document.getElementById('size').value.trim();
    const date = document.getElementById('date').value;
    const duration = document.getElementById('duration').value;
    const note = document.getElementById('note').value.trim();

    const message = `السلام عليكم، بغيت نحجز من عند PERLE HOMME\n\nالاسم: ${name}\nالهاتف: ${phone}\nنوع الطلب: ${category}\nالموديل: ${model}\nالمقاس / العمر: ${size}\nتاريخ المناسبة: ${date}\nمدة الكراء: ${duration}\nملاحظات: ${note || 'لا توجد'}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  });
}
