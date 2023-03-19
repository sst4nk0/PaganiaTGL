var min = 1;
var max = 20;

function placeholderCheck() {	
	var random = Math.random() * (max - min);
    random += min;	
	random =  Math.floor(random);
    if (random == '1.0') {
		return ' А знаешь что я решил?';
    }
	else if (random == '2.0') {
        return ' Когда я проснулся ночью, меня осенило.';
    }
	else if (random == '3.0') {
        return ' Я тут размышлял, размышлял, и понял.';
    }
	else if (random == '4.0') {
        return ' У меня есть приятные новости!';
    }
	else if (random == '5.0') {
        return ' Хочешь открою небольшой секрет?';
    }
	else if (random == '6.0') {
        return ' Времена тяжелые, и я кое что решил.';
    }
	else if (random == '7.0') {
        return ' Смотришь вот на твою морду и понимаешь...';
    }
	else if (random == '8.0') {
        return ' Когда ты пришел, у меня в голове аж щёлкнуло!';
    }
	else if (random == '9.0') {
        return ' Когда я голодный - ко мне приходят умные мысли...';
    }
	else if (random == '10.0') {
        return ' А, опять ты? Тогда слушай что скажу тебе.';
    }
	else if (random == '11.0') {
        return ' О чём я хотел говорить... А! Вспомнил.';
    }
	else if (random == '12.0') {
        return ' Сегодня хороший день. Поэтому вот моё решение.';
    }
	else if (random == '13.0') {
        return ' Всегда было интересно, что будет завтра?';
    }
	else if (random == '14.0') {
        return ' Я вспомнил о чем думал до твоего прихода.';
    }
	else if (random == '15.0') {
        return ' Иногда мои планы пугают меня.';
    }
	else if (random == '16.0') {
        return ' Зачастую мои планы гениальны.';
    }
	else if (random == '17.0') {
        return ' Чего ты по-настоящему хочешь? Я скажу тебе.';
    }
	else if (random == '18.0') {
        return ' Поверь, мои решения не подвержимы сомнениям.';
    }
	else if (random == '19.0') {
        return ' Сейчас я думаю только об одном.';
    }
	else if (random == '20.0') {
        return ' Да. Всё. Теперь точно.';
    }	
    else {
        return random;
    }
}
 
placeholderCheck()