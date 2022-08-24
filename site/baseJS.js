const seasons = () => {
    let number = Number(prompt('Введите номер месяца'));
    if (number === 12 || number === 1 || number === 2 ) {
        confirm('Время года - ЗИМА!');
    } else if (number === 3 || number === 4 || number === 5) {
        confirm('Время года - ВЕСНА!');
    } else if (number === 6 || number === 7 || number === 8) {
        confirm('Время года - ЛЕТО!'); }
        else if (number === 9 || number === 10 || number === 11) {
            confirm ('Время года - ОСЕНЬ!');
        } else {confirm('Что-то пошло не так :(')}
    }

const words = () => {
    alert('Сейчас появятся слова, попробуйте их запомнить!');
    const word = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    function shuffle(arr){
        let j, temp;
        for(let i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(arr.length));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }
    alert(shuffle (word));

    let answer1 = prompt('Чему равнялся первый элемент массива?');
    let answer2 = prompt('Чему равнялся последний элемент массива?');

    if ((answer1 === word[0]) && answer2 === (word[word.length - 1])) {
        alert('Вы победили!');
    } else if (answer1 === word[0] || answer2 === word[word.length - 1]) {
        alert('Вы были близки к победе!');
    } else {
        alert('Вы ответили неверно :(');
    }
}
const couple = {
    questionPuzzle : 'С виду — клин, а развернешь — блин.',
    answerPuzzle : 'Зонт',
    hints: ['Изначально это было создано для защиты от солнца','Сейчас мы используем это в дождливую погоду', 'Вы не угадали']
}
const puzzles = () => {
    alert(couple.questionPuzzle);
    console.log(couple.hints);
    for (let i = 0; i < 3; i++) {
        let userAnswer = prompt();
        if (userAnswer === couple.answerPuzzle ) {
            alert('Вы угадали!');
            break;
        } else {
            alert(couple.hints[i]);
        }
    }
    }
