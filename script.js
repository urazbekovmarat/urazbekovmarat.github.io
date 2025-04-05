// Получаем все ссылки навигации
const navLinks = document.querySelectorAll('.nav-link');

// Получаем все разделы страницы
const sections = document.querySelectorAll('.section');

// Добавляем обработчик события для каждой ссылки
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Получаем ID секции, на которую ссылается ссылка
        const targetId = link.getAttribute('href').substring(1);

        // Отображаем нужный раздел, скрывая остальные
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});
