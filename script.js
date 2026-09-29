// Кнопка "Наверх"
document.addEventListener('DOMContentLoaded', function () {
    var scrollBtn = document.getElementById('scrollTop');

    // Показывает/скрывает кнопку при прокрутке
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('scroll-top--visible');
        } else {
            scrollBtn.classList.remove('scroll-top--visible');
        }
    });

    // Плавная прокрутка наверх при клике
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// Случайный факт
var facts = [
    'Первое сообщение в ARPANET должно было быть «LOGIN», но система упала на «LO».',
    'ENIAC весил 30 тонн и использовал 17 000 электронных ламп.',
    'Первый сайт info.cern.ch работает до сих пор.',
    'Тим Бернерс-Ли отказался от патента на WWW, чтобы интернет стал свободным.',
    'Слово «интернет» происходит от «internetwork» — «объединение сетей».',
    'В 1983 году ARPANET перешла на TCP/IP — этот день называют днём рождения интернета.',
    'Первая веб-камера следила за кофеваркой в Кембриджском университете.',
    'Google обрабатывает более 8,5 миллиардов запросов в день.',
    'Через интернет ежегодно передаётся более 100 зеттабайт данных.',
    'К 2030 году к интернету будет подключено более 50 миллиардов устройств.',
    'Первое доменное имя в мире — symbolics.com, зарегистрировано в 1985 году.',
    'Электронная почта появилась раньше Всемирной паутины — в 1971 году.'
];

document.addEventListener('DOMContentLoaded', function () {
    var factEl = document.getElementById('randomFact');
    if (factEl) {
        var randomIndex = Math.floor(Math.random() * facts.length);
        factEl.textContent = facts[randomIndex];
    }
});