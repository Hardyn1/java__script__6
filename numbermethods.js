// Метод ToString().
// Этот метод возвращает строковое представление числа.
var numb = 10;
var str = numb.toString();
console.log(typeof numb);
console.log(typeof str);

// Функция isNan().
// Функция isNan определяет, является ли переданное значение NaN(не число)или нет.
var nuMB = 10;
var sTR = "text";

var check1 = isNaN(nuMB);
var check2 = isNaN(sTR);
console.log(check1);
console.log(check2);

// Функция toFixed().
// Функция toFixed форматирует число, округляя его до целого, тоесть к чему больше склоняется.
// в (2) передаваемое значение обозначет сколько знаков оставить после точки.
var nUMB = 14.823;
var newNumber = nUMB.toFixed(2);
console.log(newNumber);

// Метод parseInt().
var numText = "2938string";
var newNumText = parseInt(numText);
console.log(newNumText);
// Метод parseInt берет строку и вытаскивает из нее число.
// В данном случае выведет // 2938.
// Если число в конце или в середине, то он не выследит.

// Метод parseFloat().
var numToc = "123.134 Dollars";
var newNumToc = parseFloat(numToc);
console.log(newNumToc);
// В данном случае выведет // 123.134.
// Метод parseFloat берет строку и вытаскивает из нее число с плавающей точкой.
