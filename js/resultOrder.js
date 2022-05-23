const tbody = document.querySelector(".tbody");
const order = document.querySelector(".order");

tbody.innerHTML = localStorage.getItem("tbody");


let rows = tbody.getElementsByTagName('tr'),
rowsB = rows.length;
for (let i=0; i<rowsB; i++){
    let row = rows[i];
    row.deleteCell(-1);
}

const totalPrice = +localStorage.getItem("totalPrice");
const discount = +localStorage.getItem("discount");
if(discount !== 0 ){
    let discountPrice = totalPrice - (discount * totalPrice);
    order.innerHTML += `<p class="result-price">Общая сумма заказа: <b>${totalPrice.toFixed(2)} руб.</b></p>
                        <p class="result-price">Скидка: <b>${discount*100}%</b></p>
                        <p class="result-price">К оплате: <b>${discountPrice.toFixed(2)} руб.</b></p>
                        <h3 class="thank-text">Спасибо, что выбираете нас!</h3>`;
}else{
    order.innerHTML += `<p class="result-price">Общая сумма заказа: <b>${totalPrice.toFixed(2)} руб.</b></p>
                        <h3 class="thank-text">Спасибо, что выбираете нас!</h3>`;
}