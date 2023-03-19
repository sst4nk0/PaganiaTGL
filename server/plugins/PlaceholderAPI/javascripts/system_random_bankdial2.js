var min = 1;
var max = 20;
 
function placeholderCheck() {
	var random = Math.random() * (max - min);
    random += min;	
	random =  Math.floor(random);
    if (random == '1.0') {
        return ' Я буду менять один златник на один медянник.';
    }
	else if (random == '2.0') {
        return ' Для тебя курс обмена будет дороже. Уже с завтра!';
    }
	else if (random == '3.0') {
        return ' На неделе я куплю всё в этом мире на деньги банка!';
    }
	else if (random == '4.0') {
        return ' А хотя нет... Не буду пока ничего говорить.';
    }
	else if (random == '5.0') {
        return ' Деньги банка - мои деньги. Это же логично.';
    }
	else if (random == '6.0') {
        return ' Жизнь коротка, поэтому я - увольняюсь. Завтра.';
    }
	else if (random == '7.0') {
        return ' Я когда-нибудь перестану обманывать людей.';
    }
	else if (random == '8.0') {
        return ' Ты мне будешь дарить монеты в качестве дани.';
    }
	else if (random == '9.0') {
        return ' Я раздам все деньги банка! Себе конечно...';
    }
	else if (random == '10.0') {
        return ' Процентная ставка будет повышена.';
    }
	else if (random == '11.0') {
        return ' Больше я не стану обслуживать нищих.';
    }
	else if (random == '12.0') {
        return ' Теперь я буду забирать все деньги у прихожан.';
    }
	else if (random == '13.0') {
        return ' Скоро я начну продавать деньги за деньги.';
    }
	else if (random == '14.0') {
        return ' Пока я тут работаю - я буду унижать кого хочу.';
    }
	else if (random == '15.0') {
        return ' Уже почти все банки разорены мной. Остался этот.';
    }
	else if (random == '16.0') {
        return ' Продавать воздух - это талант. Я им завладею.';
    }
	else if (random == '17.0') {
        return ' Ты будешь платить двойную пошлину за мои услуги.';
    }
	else if (random == '18.0') {
        return ' Все будут платить тройную пошлину за мои услуги!';
    }
	else if (random == '19.0') {
        return ' Я открою свой монетный двор, и создам свою валюту.';
    }
	else if (random == '20.0') {
        return ' Ты - всего лишь мой источник денег. Поэтому спасибо.';
    }
	
    else {
        return random;
    }
}
 
placeholderCheck()