const products = [
  {id:'adult-1',category:'adult',tag:'كبار',title:'بدلة ملكية 01',sizes:'46 - 56',colors:'أسود، أوف وايت، كحلي',occasion:'أعراس وسهرات',status:'متوفر',desc:'موديل رسمي بخطوط نظيفة ووقفة فاخرة يناسب الأعراس الراقية والمناسبات الرسمية.',art:'tuxedo'},
  {id:'adult-2',category:'adult',tag:'كبار',title:'بدلة راقية 02',sizes:'40 - 62',colors:'أسود، رمادي داكن',occasion:'خطوبة ومناسبات',status:'متوفر',desc:'تصميم كلاسيكي أنيق يمنح حضورًا واثقًا وإطلالة متوازنة.',art:'tuxedo'},
  {id:'adult-3',category:'adult',tag:'كبار',title:'بدلة سهرة 03',sizes:'40 - 62',colors:'أسود، خمري',occasion:'سهرة وعرس',status:'حسب الموعد',desc:'بذلة بلمسة أكثر جرأة وذوق شبابي للمناسبات الليلية.',art:'tuxedo'},
  {id:'kid-1',category:'kid',tag:'أطفال',title:'بدلة أطفال 01',sizes:'1 سنة - 11 سنة',colors:'أزرق، أبيض، رمادي',occasion:'أعراس عائلية',status:'متوفر',desc:'موديل أطفال بستايل مرتب وخامات مريحة وحضور جميل في الصور.',art:'kidwear'},
  {id:'kid-2',category:'kid',tag:'أطفال',title:'بدلة أطفال 02',sizes:'1 سنة - 11 سنة',colors:'أسود، بيج',occasion:'حفلات ومناسبات',status:'متوفر',desc:'بذلة صغيرة بلمسة راقية تناسب الحفلات العائلية والأفراح.',art:'kidwear'},
  {id:'shoe-1',category:'shoe',tag:'أحذية',title:'حذاء كلاسيكي 01',sizes:'23 - 44',colors:'أسود، بني',occasion:'تكميل الإطلالة',status:'متوفر',desc:'حذاء رسمي ينسجم مع البذلات ويكمل المظهر النهائي بأناقة.',art:'shoeart'},
  {id:'shoe-2',category:'shoe',tag:'أحذية',title:'حذاء سهرة 02',sizes:'23 - 44',colors:'أسود لامع',occasion:'سهرة وعرس',status:'حسب الموعد',desc:'حذاء بلمسة أكثر فخامة للمناسبات المسائية والطلّات الراقية.',art:'shoeart'},
  {id:'shirt-1',category:'shirt',tag:'قمصان',title:'قميص رسمي 01',sizes:'XS - 6XL',colors:'أبيض، سكري',occasion:'كل المناسبات',status:'متوفر',desc:'قميص رسمي ناعم بقصة متوازنة يناسب معظم الموديلات الرسمية.',art:'shirtart'},
  {id:'shirt-2',category:'shirt',tag:'قمصان',title:'قميص فاخر 02',sizes:'XS - 6XL',colors:'أبيض، ذهبي خفيف',occasion:'الأعراس',status:'متوفر',desc:'قميص أنيق يضيف إشراقة راقية تحت الجاكيت أو اللباس البلدي.',art:'shirtart'},
  {id:'baladi-1',category:'baladi',tag:'بلدي',title:'بلدي ملكي 01',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'عرس مغربي',status:'متوفر',desc:'موديل بلدي فاخر بطابع مغربي تقليدي، يبرز التفاصيل الذهبية الراقية مع بياض ملكي نظيف.',art:'baladiart'},
  {id:'baladi-2',category:'baladi',tag:'بلدي',title:'بلدي ملكي 02',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'زفاف وتقليد',status:'متوفر',desc:'تفاصيل مستوحاة من الجمالية المغربية مع لمسة احتفالية جذابة.',art:'baladiart'},
  {id:'baladi-3',category:'baladi',tag:'بلدي',title:'بلدي ملكي 03',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'حفلة العرس',status:'متوفر',desc:'تصميم يوازن بين الوقار والفخامة ويصلح للصور والظهور الرسمي.',art:'baladiart'},
  {id:'baladi-4',category:'baladi',tag:'بلدي',title:'بلدي ملكي 04',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'موكب العرس',status:'حسب الموعد',desc:'موديل تقليدي بلمسة احترافية يبرز حضورًا قويًا في المناسبات الكبيرة.',art:'baladiart'},
  {id:'baladi-5',category:'baladi',tag:'بلدي',title:'بلدي ملكي 05',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'دخلة وعقيقة',status:'متوفر',desc:'طابع احتفالي أنيق مع توزيع متوازن للّون الذهبي على التصميم.',art:'baladiart'},
  {id:'baladi-6',category:'baladi',tag:'بلدي',title:'بلدي ملكي 06',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'ليلة الحناء',status:'متوفر',desc:'موديل بلدي أكثر إشراقًا يناسب المناسبات العائلية الرفيعة.',art:'baladiart'},
  {id:'baladi-7',category:'baladi',tag:'بلدي',title:'بلدي ملكي 07',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'استقبال فاخر',status:'حسب الموعد',desc:'يمنح إطلالة مغربية أصيلة بمظهر عصري مهيب ومرتب.',art:'baladiart'},
  {id:'baladi-8',category:'baladi',tag:'بلدي',title:'بلدي ملكي 08',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'أعراس ومناسبات',status:'متوفر',desc:'قصة مميزة بتفاصيل جانبية ملفتة تليق بالمناسبات ذات الطابع المغربي.',art:'baladiart'},
  {id:'baladi-9',category:'baladi',tag:'بلدي',title:'بلدي ملكي 09',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'أفراح كبيرة',status:'متوفر',desc:'ستايل فاخر للباحثين عن الحضور الملوكي في اللباس البلدي.',art:'baladiart'},
  {id:'baladi-10',category:'baladi',tag:'بلدي',title:'بلدي ملكي 10',sizes:'S - M - L - XL - XXL - XXXL',colors:'أبيض، ذهبي ملكي، أصفر فاقع',occasion:'مناسبات راقية',status:'حسب الموعد',desc:'موديل نهائي في المجموعة بلمسة أكثر فخامة ووضوحًا في التفاصيل الملكية.',art:'baladiart'}
];

const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuToggle = document.getElementById('menuToggle');
const mobilePanel = document.getElementById('mobilePanel');
const themeToggle = document.getElementById('themeToggle');
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalCloseAlt = document.getElementById('modalCloseAlt');
const modalHeroArt = document.getElementById('modalHeroArt');
const modalThumbs = document.getElementById('modalThumbs');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalSizes = document.getElementById('modalSizes');
const modalColors = document.getElementById('modalColors');
const modalOccasion = document.getElementById('modalOccasion');
const modalStatus = document.getElementById('modalStatus');
const bookThisModel = document.getElementById('bookThisModel');
const bookingForm = document.getElementById('bookingForm');

let currentProduct = null;
let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', theme);

function artMarkup(type) {
  return `<div class="silhouette-mini ${type}"></div>`;
}

function renderProducts(filter = 'all') {
  const filtered = filter === 'all' ? products : products.filter(item => item.category === filter);
  productsGrid.innerHTML = filtered.map(item => `
    <article class="product-card ${item.category}" data-category="${item.category}">
      <div class="product-art">
        <span class="product-badge">${item.tag}</span>
        ${artMarkup(item.art)}
      </div>
      <div class="product-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="product-meta">
          <div><strong>المقاسات</strong><span>${item.sizes}</span></div>
          <div><strong>الألوان</strong><span>${item.colors}</span></div>
        </div>
        <div class="card-actions">
          <button class="btn btn-primary btn-mini open-details" type="button" data-id="${item.id}">عرض التفاصيل</button>
          <a class="btn btn-secondary btn-mini" href="#booking">احجز الآن</a>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.open-details').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.id));
  });
}

function createThumbs(type) {
  return Array.from({ length: 4 }).map((_, index) => `
    <div class="thumb" aria-label="صورة ${index + 1}">
      <div class="silhouette-mini ${type}"></div>
    </div>
  `).join('');
}

function openModal(id) {
  const item = products.find(product => product.id === id);
  if (!item) return;
  currentProduct = item;
  modalTag.textContent = item.tag;
  modalTitle.textContent = item.title;
  modalDesc.textContent = item.desc;
  modalSizes.textContent = item.sizes;
  modalColors.textContent = item.colors;
  modalOccasion.textContent = item.occasion;
  modalStatus.textContent = item.status;
  modalHeroArt.innerHTML = artMarkup(item.art);
  modalThumbs.innerHTML = createThumbs(item.art);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.filter);
  });
});

menuToggle?.addEventListener('click', () => {
  mobilePanel.classList.toggle('open');
});

document.querySelectorAll('.mobile-panel a').forEach(link => {
  link.addEventListener('click', () => mobilePanel.classList.remove('open'));
});

themeToggle?.addEventListener('click', () => {
  theme = theme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
});

modalClose?.addEventListener('click', closeModal);
modalCloseAlt?.addEventListener('click', closeModal);
modal?.addEventListener('click', event => {
  if (event.target.dataset.close === 'true') closeModal();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

bookThisModel?.addEventListener('click', () => {
  if (!currentProduct) return;
  document.getElementById('requestType').value = currentProduct.tag === 'بلدي' ? 'بلدي' :
    currentProduct.category === 'adult' ? 'بذلة كبار' :
    currentProduct.category === 'kid' ? 'بذلة أطفال' :
    currentProduct.category === 'shoe' ? 'حذاء' : 'قميص';
  document.getElementById('model').value = currentProduct.title;
  document.getElementById('size').value = currentProduct.category === 'baladi' ? 'XL' : currentProduct.sizes.split(' - ')[0];
  closeModal();
  document.getElementById('booking').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

bookingForm?.addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const requestType = document.getElementById('requestType').value.trim();
  const model = document.getElementById('model').value.trim();
  const size = document.getElementById('size').value.trim();
  const date = document.getElementById('date').value.trim();
  const notes = document.getElementById('notes').value.trim();

  const text = `طلب حجز جديد من PERLE HOMME%0Aالاسم: ${encodeURIComponent(name)}%0Aالهاتف: ${encodeURIComponent(phone)}%0Aنوع الطلب: ${encodeURIComponent(requestType)}%0Aالموديل: ${encodeURIComponent(model)}%0Aالمقاس: ${encodeURIComponent(size)}%0Aتاريخ المناسبة: ${encodeURIComponent(date)}%0Aملاحظات: ${encodeURIComponent(notes || 'لا توجد')}`;
  window.open(`https://wa.me/212600000000?text=${text}`, '_blank');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

renderProducts();
