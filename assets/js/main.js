let counters = document.querySelectorAll('.stats-counter'),
    animationSpeed = 200;
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