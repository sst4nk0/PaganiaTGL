var min = 1;
var max = 20;
 
function placeholderCheck() {
	var random = Math.random() * (max - min);
    random += min;	
	random =  Math.floor(random);
    if (random == '1.0') {
        return ' Рад что ты снова пришел!';
    }
	else if (random == '2.0') {
        return ' Вспомнил солнце, а вот и лучик!';
    }
	else if (random == '3.0') {
        return ' Вчера мне кое-что нашептали на ушко...';
    }
	else if (random == '4.0') {
        return ' То варяги, то русы, то ляхи, то ты!';
    }
	else if (random == '5.0') {
        return ' Конечно, я тебе понадобился...';
    }
	else if (random == '6.0') {
        return ' Тысяча лет, тысяча зим!';
    }
	else if (random == '7.0') {
        return ' Тебя увидел и сразу забыл что-то...';
    }
	else if (random == '8.0') {
        return ' Когда я пьян - я лучший ведич, да.';
    }
	else if (random == '9.0') {
        return ' Сегодня расклад такой...';
    }
	else if (random == '10.0') {
        return ' Видел Корнеплода? Нет? Досадно...';
    }
	else if (random == '11.0') {
        return ' Смурный сегодня день, и вот что я понял';
    }
	else if (random == '12.0') {
        return ' Не могу вспонмить где твои вещи...';
    }
	else if (random == '13.0') {
        return ' Та руна кстати ничего не стоит. Я уверен.';
    }
	else if (random == '14.0') {
        return ' Если я правильно понимаю, то слушай:';
    }
	else if (random == '15.0') {
        return ' Вчера не виделись, да?';
    }
	else if (random == '16.0') {
        return ' Рад видеть тебя! Есть новость.';
    }
	else if (random == '17.0') {
        return ' Зачем пришел? А нет, не говори.';
    }
	else if (random == '18.0') {
        return ' Я редко думаю о том что говорю...';
    }
	else if (random == '19.0') {
        return ' Сегодня лишь одно на уме.';
    }
	else if (random == '20.0') {
        return ' Доброго дня!';
    }
	
    else {
        return random;
    }
}
 
placeholderCheck()