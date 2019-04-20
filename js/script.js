let money = +prompt('Ваш бюджет на месяц?', 'Введите число');
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings : false
}

// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязталеьную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');
    
//     if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) 
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         alert("Введите правильные значения!");
//     }    
// };
let num = 0;
while (num < 2) {
    let a = prompt("Введите обязталеьную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) 
    && a != '' && b != '' && a.length < 50) {
        num++;
        console.log("done" + num);
        appData.expenses[a] = b;   } 
    else {
        alert("Введите правельные значения!");
    }     
};


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Жить можно");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка!");
}
