let counters = document.querySelectorAll('.stats-counter'),
    animationSpeed = 200,
    paymentQr = document.querySelector('.payment-qr'),
    loadingProgress = document.querySelector('.loader'),
    close = document.querySelector('.close-btn'),
    qr = document.querySelector('.qr');
counters.forEach(counter => {
    function updateCount() {
        let target = +counter.getAttribute('data-target'),
            count = +counter.innerHTML,
            incrementSpeed = target / animationSpeed;

        if (count < target) {
            counter.innerText = Math.ceil(count + incrementSpeed);
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
})

function showQr() {
    paymentQr.style.transform = 'scale(1)';
    setTimeout(() => {
        loadingProgress.style.display = 'none';
        qr.style.transform = 'scale(1)';
    }, 3000)
}
close.addEventListener('click', () => {
    paymentQr.style.transform = 'scale(0)';
})