let money,
    time;

money = prompt('Ваш бюджет на месяц?', 'Введите число');
time = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        
    },
    optionalExpenses : { 

    },
    income: [],
    savings : false
}

let oneQuestion,
    secondQuestion;

oneQuestion = prompt('Введите обязательную статью расходов в этом месяце', 'Продукты');
secondQuestion = prompt('Во сколько обойдется?', '10 000');

appData.expenses = {oneQuestion : secondQuestion};
console.log(appData.budget);
console.log(appData.expenses.oneQuestion);
let answer;
answer = appData.budget - appData.expenses.oneQuestion;
console.log(typeof(appData.budget));
//alert('Ваш бюджет:' + ((appData.budget - appData.expenses.oneQuestion) / 30));