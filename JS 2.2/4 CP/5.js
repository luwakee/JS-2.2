function generateArray(array) {
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === "object" && !Array.isArray(array[i])) {
        let objValues = Object.values(array[i]);
        array[i] = objValues;
      }
    }
    return array;
  }
  
  let array = [[1], {id: 40}, [100], [300], {part: 10}];
  console.log(generateArray(array));
  

// Мы создаем функцию generateArray, которая принимает массив в качестве аргумента. Затем мы используем цикл for, чтобы пройти по каждому элементу массива. Внутри цикла мы используем оператор typeof и метод Array.isArray(), чтобы проверить, является ли текущий элемент объектом. Если элемент является объектом и не является массивом, мы используем метод Object.values() для получения значений свойств объекта, затем заменяем элемент исходного массива на массив, содержащий значения свойств объекта. Наконец, мы возвращаем измененный массив.

// При вызове функции с массивом [[1], {id: 40}, [100], [300], {part: 10}] она вернет массив [[1], [40], [100], [300], [10]].