let h1 = document.getElementsByTagName("h1")[0];

h1.addEventListener("click", () => {
    alert("Вы кликнули на заголовок - так держать!");
});

btn = document.getElementById("btn");

btn?.addEventListener("click", () => {
    let table = document.getElementById("t2");
    let rows = table.rows
    let a = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений",
        "Разработка классических модулей веб-приложений"
    ];
    for (let i = 1; i < rows.length; i++) {
        rows[i].cells[1].textContent = a[i - 1];
    }
});

let img = document.getElementById("stimg");

img.addEventListener("mouseover", () => {
    img.style.width = "30%";
});

img.addEventListener("click", () => {
    img.setAttribute("src", "./src/img/cat.jpg");
});

img.addEventListener("dblclick", () => {
    alert("Не налегай, у меня не так много любимых преподавателей");
});