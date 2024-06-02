// Перебор массива.
var cars = ["lada", "opel", "volkswagen", "bmw", "nissan"];
// for(var i = 0; i < cars.length; i++) {
// 	console.log(cars[i]);
// }

// Метод forEach.
cars.forEach(function(item,index,array){
	// console.log(item);
	// console.log(index);
	console.log(array);
});
// Метод forEach()выполняет указанную функцию один раз для каждого элемента в массиве.
// Порядок такой = (каждый элемент массива, именно индекс массива, что за массив мы вообще вызываем).
// Не обязательно писать все параметры.
// Параметры внутри функции это callback.
// 1 item = 1элемент в массиве, тоесть lada.
// Метод forEach вызывается столько раз сколько элементов в массиве.
// Функция в foeach ничего не возвращает ! она просто делает свое дело.

// Метод Filter.
var numbers = [-33, -668, 93, 71, 184, 85, -902];
var positiveNumbers = [];

for(var a = 0; a < numbers.length; a++) {
	if(numbers[a] > 0) {
		positiveNumbers.push(numbers[a]);
	}
}
console.log(numbers);
console.log(positiveNumbers);
// Push еще вкладывает из условия массив в другой массив.
// Метод Filter создает новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.
// var negativeNumbers = [];
// Можно не создавать новый пустой массив, пример внизу.
var negativeNumbers = numbers.filter(function(item){
return item < 0;
});
console.log(negativeNumbers);
// Метод Filter он возвращает новый массив, forEach не возвращает.
// Метод Filter принимает callback функцию.

// Метод Map.;
var moreNumbers = [6, 24, 555, 424, 43, 11224];
resultMap = moreNumbers.map(function(item) {
return item * 2;
});
console.log(resultMap);
// Метод map создает новый массив с результатом вызова указанной функции,
// для каждого элемента массива.
// Метод Filter, Map он возвращает новый массив, forEach не возвращает.

// Метод Reduce.
var numbersSum = [2, 3, 62, 23, 91, 68];
var result = numbersSum.reduce(function(sum,item,index,array){
return sum + item;
});
console.log(result);
// Метод Reduce применяет функцию reducer к каждому элементу массива (справа - налево),
// возвращая одно результирующее значение.
// 1 некий параметр это - калькулятор (sum),
// набирает новые значения и прибавляет к себе.
// Метод Filter, Reeduce, Map. он возвращает новый массив, forEach не возвращает.
// Метод возвращает поэтому ключевое слово - return.

// var sum = 0;
// for(let i = 0; i < numbersSum.length; i++) {
// 	sum += numbersSum[i];
// };
// console.log(sum);
// 1 пример БЕЗ МЕТОДА REDUCE.
// Задание - посчитать сумму всех элементов массива.

// Метод Indexof.
var countrys = ["russia", "slovenia", "estonia", "zimbabwe", "urugwai", "uk", "usa",];
var rezult = countrys.indexOf("usa", 0);
console.log(rezult);
// Метод Indexof возвращает первый индекс, по которому данный элемент может быть найден,
// в массиве или -1, если такого индекса нет.
// в (1 параметр идет search element - что мы ищем,
// 2 элемент с какого индекса - 0, тоесть с 0 индекса).
// если такого элемента нет, то вернет -1.
// Если идентичных элементов много, то он вернет а 2 нет.

// Метод Includes.
var countrys = ["russia", "slovenia", "england", "estonia", "zimbabwe", "urugwai", "uk", "usa",];
var rezult = countrys.includes("england", 0);
console.log(rezult);
//  Метод Includes() определяет, содержит ли массив определенный элемент,
// возвращая в зависимости от этого true или false.
// Фактически тоже самое только теперь возвращает true/false.

// Метод findIndex.
var numbbers = [12, 33, 44, 56, 77, 67, 98, 154, 424];
var resulta = numbbers.findIndex(function(el){
return el > 10;
});
console.log(resulta);
// Метод findIndex возвращает ИНДЕКС в массиве, если элемент удовлетворяет условию проверяющей функции.
// В противном случае возвращается -1.
// Если в условии el>10, то он вернет именно 1 индекс превосходящий 10.

// Метод indexOf.
var phrase = "мой кот самый толстый";
var index = phrase.indexOf("толстый", 14);
console.log(index);
// в Методе вторым аргументом после запятой пишем позицию,
// тоесть с какого индекса мы ищем тот самый элемент.
// var phrase = "мой кот самый толстый";
// var index = phrase.indexOf("самый");
// console.log(index);
// Вернул первое вхождение с 8 индекса "самый" начиная с 8 индекса.
// Метод indexOf, возвращает индекс первого символа первого вхождения агрумента в своей строке.

// Метод Substring.
var userInfo = "Petrov/Ivan/Alekseevich";
var userResult = userInfo.substring(7, 11);
console.log(userResult);

var color = "svetlo-zeleniy"
var colorResult = color.substring(7, 14);
console.log(colorResult);
// 1 аргумент с какого индекса и по какой - вывело Ivan.
// Метод Substring получает два индекса, после чего извлекает и возвращает,
// заключенную между ними строку.