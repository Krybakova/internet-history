// ============================================
// КНОПКА "НАВЕРХ"
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    var scrollBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('scroll-top--visible');
        } else {
            scrollBtn.classList.remove('scroll-top--visible');
        }
    });

    scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ============================================
// АВТОПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    // Текущее имя файла из адресной строки
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Все ссылки в меню (десктоп + мобильное)
    var menuLinks = document.querySelectorAll('.site-menu a, .site-mobile-menu a');

    menuLinks.forEach(function (link) {
        // Имя файла, на который ведёт ссылка
        var linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.parentElement.classList.add('uk-active');
        }
    });
});

// ============================================
// ПОЯВЛЕНИЕ СЕКЦИЙ ПРИ ПРОКРУТКЕ
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('.site-section');

    if (sections.length === 0) return;

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('site-section--visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(function (section) {
        observer.observe(section);
    });
});