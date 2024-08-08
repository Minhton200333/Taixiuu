function playTaiXiu() {
    const dice1 = rollDice();
    const dice2 = rollDice();
    const dice3 = rollDice();
    const total = dice1 + dice2 + dice3;
    const result = total >= 11 ? 'Tài' : 'Xỉu';

    document.getElementById('dice1').src = `images/dice${dice1}.png`;
    document.getElementById('dice2').src = `images/dice${dice2}.png`;
    document.getElementById('dice3').src = `images/dice${dice3}.png`;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Tổng: ${total} | Kết quả: ${result}`;
}
