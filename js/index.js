const priceWrapper = document.querySelector(".price-wrapper");
const viberBtn = document.getElementById("viber-btn");
const instBtn = document.getElementById("inst-btn");
const textPrice = document.querySelector(".text-price");

setViberPrice();

function setViberPrice(){
    viberBtn.className = "order-btn price-btn focus-btn";
    instBtn.className = "order-btn price-btn";

    textPrice.textContent = "Цены Viber";
    localStorage.setItem("flagPrice", "V");
    priceWrapper.innerHTML = "";
    categories.forEach((category, num) => {
        priceWrapper.innerHTML += `<div class="item-category">
                                    <label class="name-category">${category}: </label>
                                    <input class="input-price" id=${num} value=${localStorage.getItem("V" + category)== null ? 0 : localStorage.getItem("V" + category)} >
                                </div>`;
    });
}

function setInstPrice(){
    viberBtn.className = "order-btn price-btn";
    instBtn.className = "order-btn price-btn focus-btn";

    textPrice.textContent = "Цены Instagram";
    localStorage.setItem("flagPrice", "I");
    priceWrapper.innerHTML = "";
    categories.forEach((category, num) => {
        priceWrapper.innerHTML += `<div class="item-category">
                                    <label class="name-category">${category}: </label>
                                    <input class="input-price" id=${num} value=${localStorage.getItem("I" + category)== null ? 0 : localStorage.getItem("I" + category)} >
                                </div>`;
    });
}

function addPrice(){
    let flagPrice = localStorage.getItem("flagPrice");
    categories.forEach((category, num) => {
        const inputPrice = document.getElementById(num.toString());
        localStorage.setItem(flagPrice + category, inputPrice.value);
    });
}