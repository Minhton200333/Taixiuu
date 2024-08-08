document.getElementById('roll-button').addEventListener('click', playTaiXiu);

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playTaiXiu() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const dice3 = rollDice();
    const total = dice1 + dice2 + dice3;
    const result = total >= 11 ? 'Tài' : 'Xỉu';

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Xí ngầu: ${dice1}, ${dice2}, ${dice3} | Tổng: ${total} | Kết quả: ${result}`;
}
