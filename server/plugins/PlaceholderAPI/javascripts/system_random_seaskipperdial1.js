var min = 1;
var max = 10;
 
function placeholderCheck() {
	var random = Math.random() * (max - min);
    random += min;	
	random =  Math.floor(random);
    if (random == '1.0') {
        return ' Ну что, отправляемся сейчас?';
    }
	else if (random == '2.0') {
        return ' Боги нам благоволят. Пора отплывать!';
    }
	else if (random == '3.0') {
        return ' Не видел пробоину? А она есть. Возможно.';
    }
	else if (random == '4.0') {
        return ' Пока будем плыть, я тебе расскажу кое-что.';
    }
	else if (random == '5.0') {
        return ' Плати мне, и будешь кататься по всему свету!';
    }
	else if (random == '6.0') {
        return ' Велимудр мне сегодня обещал золотой день.';
    }
	else if (random == '7.0') {
        return ' Уметь бы летать как птица, а не плавать как рыба.';
    }
	else if (random == '8.0') {
        return ' Когда-нибудь изобретут летучий корабль, я уверен.';
    }
	else if (random == '9.0') {
        return ' Дружище, лучше погоды для плаваний я не видел!';
    }
	else if (random == '10.0') {
        return ' Интересно, где сейчас Корнеплод...';
    }
    else {
        return random;
    }
}
 
placeholderCheck()