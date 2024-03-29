let obj = { 
    price1: 100, 
    price2: 150, 
    price3: 200, 
    price4: 100,
    price5: 150, 
};

let sum = 0;

for (let prop in obj) {
  sum += obj[prop];
}

console.log(sum); // выведет 700

// Мы создаем переменную sum, которая будет хранить сумму значений свойств объекта. Затем, в цикле for..in перебираем свойства объекта obj и для каждого свойства добавляем его значение к переменной sum. По завершении цикла, переменная sum будет содержать итоговую сумму значений свойств объекта.



