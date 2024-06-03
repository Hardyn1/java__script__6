// Методы строк.
// Свойство length содержит количество символов в строке.
// Свойство lenght, есть как у массива так и у строк.
// Строка можно выглядеть как примитив, так и обьект.
var texts = "здесь какой то очередной умный текст";
if(texts.length > 0) {
	console.log("этот кусок кода выполнился");
	console.log(texts.length);
};

// Позволяет по символьно разобрать строку.
for(let i = 0; i < texts.length; i++){
console.log(texts[i]);
};

// Метод CharAt.
var input = "developer@gmail.com";
for(let i = 0; i < input.length; i++) {
	if(input.charAt(i) == "@") {
		console.log("yes, this is e-mail adress");
	} else {
		console.log("no, this is not e-mail adress")
	};
};

var text2 = "wayup";
var i = text2.charAt(2);
console.log(i);
// Под индексом 2 вернет значение Y.
// Метод CharAt возвращает указанный символ из строки.
// Индекс 1 элемента как и в массиве равен 0.

// Метод Split.
var userName = "Demin Sergei Jurjevich";
var userRezult = userName.split();
console.log(userRezult);
// Метод Split превращает строку в массив, путем разделения строк по указанному разделителю.

// 2 Метода - toLowerCase / toUpperCase.
var texta = "Kakoi To Tekst Ocherednoy";
console.log(texta);
var textaResult = texta.toUpperCase();
var textaResult = texta.toLowerCase();
console.log(textaResult);
// Эти два метода изменяют регистр символов строки.

// Метод Slice.
var texte = "ja skoro budu zarobativat na JavaScript";
var texteResult = texte.slice(9,26);
console.log(texteResult);
// С какого и по какой индекс извлекать часть текста из строки,
// для этого вводим 2 аргумента.
// Метод Slice извлекает часть строки и возвращает новую строку.

// Метод Replace (популярный метод).
var str1 = "I love Python";
var str1Result = str1.replace("Python", "Ruby");
console.log(str1Result);
// 1 аргумент то значение что мы хотим изменить.
// Метод Replace находит подстроки и заменяет их другой подстрокой.

