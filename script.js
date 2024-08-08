let headsCount = 0;
let tailsCount = 0;

const headsCountDisplay = document.getElementById('heads-count');
const tailsCountDisplay = document.getElementById('tails-count');
const resultDisplay = document.getElementById('result');
const coinImage = document.getElementById('coin-image');
const coin = document.getElementById('coin');

document.getElementById('flip-button').addEventListener('click', function () {
    coin.classList.add('flipping');

    setTimeout(function () {
        const random = Math.random();
        if (random < 0.5) {
            headsCount++;
            headsCountDisplay.textContent = headsCount;
            coinImage.src = 'images1/1TL_yazi.png'; // Yazı görselinin yolu
            resultDisplay.textContent = "Yazı Geldi!";
        } else {
            tailsCount++;
            tailsCountDisplay.textContent = tailsCount;
            coinImage.src = 'images1/1TL_tura.png'; // Tura görselinin yolu
            resultDisplay.textContent = "Tura Geldi!";
        }

        coin.classList.remove('flipping');
    }, 1000); // Animasyon süresi
});

document.getElementById('reset-button').addEventListener('click', function () {
    headsCount = 0;
    tailsCount = 0;
    headsCountDisplay.textContent = headsCount;
    tailsCountDisplay.textContent = tailsCount;
    resultDisplay.textContent = "";
    coinImage.src = 'images1/1TL_yazi.png'; // Varsayılan olarak Yazı görseli
});
