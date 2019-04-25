let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', 'Введите число');
    time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на месяц?', 'Введите число');
    }
}

start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income: [],
    savings : true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязталеьную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');
            
            if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) 
            && a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                alert("Введите правильные значения!");
                i = i -1;
            }    
        }

    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Жить можно");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
        }
    },
    chooseOptExpense: function() {
        for (let i = 1; i < 4; i++) {
            let q = prompt("Статья необязательных расходов?", "Поход в кафе");
            appData.optionalExpenses[i] = q;
        } 
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
        
        while (typeof(items) === 'number' || typeof(items) === null || items == '') {
            let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую', '');
        };
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то еще?', ''));
        appData.income.sort(); 

        console.log('Способы дополнительного заработка: ');
        appData.income.forEach(function(item, i, income) {
            ++i;
            console.log(i + ': ' + item);
        });
    },
    getData: function() {
        console.log('Наша программа включает в себя данные: ');
        for (let prop in appData) {
            console.log('appData.' + prop + '=' + appData[prop]);
        }
    }
};





// function chooseExpenses() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt("Введите обязталеьную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');
        
//         if ((typeof(a)) === 'string' && ((typeof(a)) != null) && ((typeof(b)) != null) 
//         && a != '' && b != '' && a.length < 50) {
//             console.log("done");
//             appData.expenses[a] = b;
//         } else {
//             alert("Введите правильные значения!");
//             i = i -1;
//         }    
//     };
// };

// chooseExpenses();

// function detectDayBudget () {
// appData.moneyPerDay = (appData.budget / 30).toFixed();
// alert("Ежедневный бюджет: " + appData.moneyPerDay);
// };

// detectDayBudget();

// function detectLevel() {
//     if (appData.moneyPerDay < 100) {
//         console.log("Минимальный уровень достатка");
//     } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
//         console.log("Жить можно");
//     } else if (appData.moneyPerDay > 2000) {
//         console.log("Высокий уровень достатка");
//     } else {
//         console.log("Произошла ошибка!");
//     }
// };

// detectLevel();

// function checkSavings() {
//     if(appData.savings == true) {
//         let save = +prompt("Какова сумма накоплений?"),
//             percent = +prompt("Под какой процент?");
//         appData.monthIncome = save/100/12*percent;
//         alert("Доход в месяц с вашего депозита: " + appData.monthIncome);    
//     }
// }

// checkSavings();


// function chooseOptExpenses() {

//     for (let i = 1; i < 4; i++) {
//         let q = prompt("Статья необязательных расходов?", "Поход в кафе");
//         appData.optionalExpenses[i] = q;
//     } 
// }

// chooseOptExpenses();


// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };

// options.bool = false;
// options.colors = {
//     border: "black",
//     bg: "red"
// };

// delete options.bool;

// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// console.log(Object.keys(options).length);

// let arr = ["first", 2, 3, "four", 5];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }


