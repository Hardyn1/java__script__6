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
var longString = "Eto ochen dlinaja stroka Eto ochen dlinaja stroka Eto ochen dlinaja stroka"; 
function sliceString (string) {
	var newShortString;
	if(longString.length > 50) {
		newShortString = longString.slice(0, 46) + "...";
	};
return newShortString;
};

var longStringResult = sliceString(longString);
console.log(longStringResult);

// Task 4.
// Есть строка : 'Я так сильно люблю программировать'. 
// Необходимо вывести в консоль длину каждого слова. 
// Сделайте это задание, используя методы перебора массива.
var textMe = "Я так сильно люблю программировать";
var textMeArray = textMe.split(" ");
textMeArray.forEach(function(item, index, array){
	for(let r = 0; r < item.length; r++) {
		console.log(item.length + " - Длина каждой строки ");
	};
});

// Task 5.
// У нас есть массив с языками программирования:
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
// Напишите функцию, которая возвращает массив, в котором удалены повторяющиеся элементы из массива.
// "kotlin" и "Kotlin" - это одинаковые языки, регистр не имеет значения.

