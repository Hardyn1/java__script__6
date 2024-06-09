// Task 1.
// Напишите функцию, которая принимает строку и делает первый символ каждого слова в строке заглавным
// Example: 
// на вход: 'это предложение из заглавных букв каждого слова'
// на выход: 'Это Предложение Из Заглавных Букв Каждого Слова'

const text = "это предложение из заглавных букв каждого слова";
function capitalized (str) {
const textArr = text.split(" ");
const textCapitalizing = textArr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
return textCapitalizing.join(" ");
};

const resultat = capitalized(text);
console.log(resultat);

// Task 2.
// Напишите функцию, которая проверяет текст на наличие плохих слов
// и изменяет каждое такое слово на выражение: 'хорошее слово'.
// на вход: 'это плохоеслово1 из заглавных плохоеслово2 каждого плохоеслово3'
// на выход: это хорошее слово из заглавных хорошее слово каждого хорошее слово'

var textPrimer = "это плохоеслово1 из заглавных плохоеслово2 каждого плохоеслово3";

function renameText (text){
	var wrongWords =  ["плохоеслово1", "плохоеслово2", "плохоеслово3"];
	var textPrimerArr = textPrimer.split(" ");
	for(let q = 0; q < textPrimerArr.length; q++) {
		if(wrongWords.includes(textPrimerArr[q])){
			textPrimerArr[q] = "хорошее слово";
		}
	}
	return textPrimerArr.join(" ");
};

var resulT = renameText(textPrimer)
console.log(resulT);

// Task 3.
// Напишите функцию, которая проверяет длину строки, и если она больше 50ти символов,
// то обрежьте её до 50 символов и вместо последних трех, поставьте "..." (троеточие)
// var longString = "Eto ochen dlinaja stroka Eto ochen dlinaja stroka Eto ochen dlinaja stroka"; 
// function sliceString (string) {
// 	var newShortString;
// 	if(longString.length > 50) {
// 		newShortString = longString.slice(0, 46) + "...";
// 	};
// return newShortString;
// };

// var longStringResult = sliceString(longString);
// console.log(longStringResult);

var longString = "Eto ochen dlinaja stroka Eto ochen dlinaja stroka Eto ochen dlinaja stroka"; 
function sliceString (string) {
	if(longString.length > 50) {
		string = longString.slice(0, 46) + "...";
	};
return string;
};

var longStringResult = sliceString(longString);
console.log(longStringResult);

// Task 4.
// Есть строка : 'Я так сильно люблю программировать'. 
// Необходимо вывести в консоль длину каждого слова. 
// Сделайте это задание, используя методы перебора массива.
var textMe = "Я так сильно люблю программировать";
var textMeArray = textMe.split(" ");
textMeArray.forEach(function(item){
	for(let r = 0; r < item.length; r++) {
		console.log(item.length + " - " + " Длина каждой строки ");
	};
});

function wordLength(text){
	var textMeArray = text.split(" ");
	for(let r = 0; r < textMeArray.length; r++) {
		console.log(textMeArray[r].length + " - " + textMeArray[r]);
	};
};

wordLength("Я так сильно люблю программировать");

	


// Task 5.
// У нас есть массив с языками программирования:
// Напишите функцию, которая возвращает массив, в котором удалены повторяющиеся элементы из массива.
// "kotlin" и "Kotlin" - это одинаковые языки, регистр не имеет значения.
var langs = [
	"php", 
	"kotlin",  
	"php", 
	"css", 
	"css",
	"Kotlin", 
	"python",
	"script", 
	"script", 
	"html", 
	"html", 
	"java", 
	"c++", 
	"Html", 
	"Ruby"
];

function uniqueLang(array){
	var langsLower = array.map(e => e.toLowerCase());
	let newLangsArr = [...new Set(langsLower)];
	return newLangsArr;
};

var uniqueResult = uniqueLang(langs);
console.log(uniqueResult);

// function uniqueLang(array){
// 	var langsLower = langs.map(e => e.toLowerCase());
// 	let newLangsArr = [...new Set(langs)];
// for(let t = 0; t < langs.length; t ++){
// 	if(newLangsArr < langs) {
// 		langs = newLangsArr;
// 	};
// };
// };

// var uniqueResult = uniqueLang(langs);
// console.log(langs);

// Task 7.
// Напишите функцию, которая возвращает массив элементов,
// представляющих собой сумму соответствующих элементов заданных массивов.
// То есть, первый элемент первого массива 
// должен складываться с первым элементом второго массива, второй со вторым, и так далее.
// Example:
// [37, 23, 43, 34, 55];
// [40, 533, 601];
// result: [77, 556, 644, 34, 55]

var n1 = [23, 875, 43, 4341, 545,];
var n2 = [85, 24, 4424, 445, 19, 14, 249];

function numSum(n1, n2){
	const numMaxLength = Math.max(n1.length, n2.length);
	var numResult = [];
	for(let q = 0; q < numMaxLength; q ++){
		numResult.push((n1[q] ?? 0) + (n2[q] ?? 0));
	};
	return numResult;
};

var functionSum = numSum(n1, n2);
console.log(functionSum);

// Task 8 (необязательно).
// Напишите функцию, которая раскрывает вложенный массив любой глубины. 
// На выходе мы должны получить массив. Используйте метод reduce.
// Example:
// [333, [222,[444,[985]]]] // [333, 222, 444, 985] 
// [298, [855], [22, [[89]]],[10,69]] // [298, 855, 22, 89, 10, 69]

var arr1 = [333, [222,[444,[985]]]];
var arr2 = [298, [855], [22, [[89]]],[10,69]];

function openArray(arrays){
var arr1New = arr1.flat(3);
var arr2New = arr2.flat(3);
var arrayNew = [...arr1New, ...arr2New];
console.log(arrayNew);
};


