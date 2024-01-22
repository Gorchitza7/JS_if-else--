// Запрос пользователю ввести первое имя
const firstName = prompt('Напишите первое имя');

// Запрос пользователю ввести второе имя
const secondName = prompt('Напишите второе имя');

// Генерация случайного числа от 0 до 99 включительно
// Math.floor() - округляет число
// Math.random() * 100 - генерирует число от 0 до 100
const randomNumber = Math.floor(Math.random() * 100);

if(randomNumber < 33 && firstName != null && secondName != null && firstName !='' && secondName !='') {
    alert(`Результат совместимости имен 
    ${firstName} и ${secondName} равен ${randomNumber}
    вам нужно поискать человека с другим именем`);
} else if (randomNumber >= 33 && randomNumber < 66 && firstName != null && secondName != null && firstName !='' && secondName !=''){
    alert(`Результат совместимости имен 
    ${firstName} и ${secondName} равен ${randomNumber}
    совместимость хорошая но может быть и лучше`);
} else if (randomNumber >= 66 && firstName != null && secondName != null && firstName !='' && secondName !=''){
    alert(`Результат совместимости имен 
    ${firstName} и ${secondName} равен ${randomNumber}
    Вы идеально подходите друг к другу`);
} else {
    alert('Упс... Вы не ввели имя. Попробуйте еще раз')
} // Правило if else находится в файле 14.js 
  // Правило логического оператора && в файле 15.js

// Вывод модального диалогового окна с использованием шаблонных литералов,
// где вставляются введенные имена и сгенерированное случайное число
// alert(`Результат совместимости имен ${firstName} и ${secondName} равен ${randomNumber}`);