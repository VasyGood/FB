//1
// h1 = document.getElementsByTagName("h1")[0]; 
// h1?.textContent = "Добро пожаловать на наш сайт!";
// h2 = document.getElementsByTagName("h2")[0];
// h2.style.color = "red";

// p1 = document.getElementsByTagName("p")[0];
// p1.textContent = "Это новый текст параграфа";

// vid = document.getElementsByTagName("video")[0];

// vid.style.display = "none";

//2
formData = {
    name: "",
    email: "",
    number: "",
    date: "",
    comment: "",
    printData: () => {
        console.log(`Имя: ${this.name}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Телефон: ${this.number}`)
        console.log(`Дата: ${this.date}`)
        console.log(`Комментарий: ${this.comment}`)
    }
};

form = document.getElementById("f");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    formData.name = form.elements["name"].value;
    formData.email = form.elements["email"].value;
    formData.number = form.elements["number"].value;
    formData.comment = form.elements["comment"].value;
    formData.date = form.elements["date"].value;
    formData.printData();
    return formData;
})


