let showMessage = (message) => {
    console.log(message);
};

let changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
};

let toggleVisibility = (selector) => {
    let elem = document.querySelector(selector)
    elem.style.visibility = elem.style.visibility == "hidden" ? "visible" : "hidden";
    elem.style.display = "none"
};

let URL_utm_term = (url) => {
    let params = new URLSearchParams(url);
    let utm_term = params.get("utm_term");
    if (utm_term) {
        document.getElementsByTagName[0].textContent = utm_term;
    }
};

let logCurrentTime = () => {
    console.log(new Date);
};

let resetBackGroundColor = () => {
    document.body.style.backgroundColor = "white";
};

