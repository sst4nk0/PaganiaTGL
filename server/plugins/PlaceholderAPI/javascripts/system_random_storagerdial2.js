var min = 1;
var max = 20;
 
function placeholderCheck() {
	var random = Math.random() * (max - min);
    random += min;	
	random =  Math.floor(random);
    if (random == '1.0') {
        return ' Весь склад ограбили. Шутка.';
    }
	else if (random == '2.0') {
        return ' И нет, я не могу дать тебе чужие вещи.';
    }
	else if (random == '3.0') {
        return ' Не задумывался о покупке расширения?';
    }
	else if (random == '4.0') {
        return ' Хочу кое-что сказать, да не могу.';
    }
	else if (random == '5.0') {
        return ' Вещи тут в полной сохранности.';
    }
	else if (random == '6.0') {
        return ' Что ты мне принес?';
    }
	else if (random == '7.0') {
        return ' У тебя местро в хранилище на исходе!';
    }
	else if (random == '8.0') {
        return ' Мои вещи - мои вещи. Твои вещи - мои.';
    }
	else if (random == '9.0') {
        return ' Я раздам все вещи! Если мне заплатят.';
    }
	else if (random == '10.0') {
        return ' Хотел бы я построить огромный склад...';
    }
	else if (random == '11.0') {
        return ' И конечно я тебе снова нужен.';
    }
	else if (random == '12.0') {
        return ' Теперь у меня таких как ты дюжины!';
    }
	else if (random == '13.0') {
        return ' Верь мне, и никогда не утратишь своего.';
    }
	else if (random == '14.0') {
        return ' Пока я тут работаю - тут будет порядок.';
    }
	else if (random == '15.0') {
        return ' Завтра расширяю склад! Возможно.';
    }
	else if (random == '16.0') {
        return ' Мои услуги чересчур обесценены.';
    }
	else if (random == '17.0') {
        return ' Предлагаю купить новое хранилище.';
    }
	else if (random == '18.0') {
        return ' Русы и Чехи обслуживаются без очереди.';
    }
	else if (random == '19.0') {
        return ' Говорю сразу, варягам я больше не помогаю.';
    }
	else if (random == '20.0') {
        return ' Все с запада богаче нас...';
    }
	
    else {
        return random;
    }
}
 
placeholderCheck()