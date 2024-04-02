(function breathApp() {

    function meditation() {
        const music = new Audio('sound/music.mp3');

        const appWrap = document.querySelector('.breath'),
            meditation = document.querySelector('.meditation');

        let numOfClick = 0;

        appWrap.classList.add('hide')
        music.play()

        let minWrap = document.querySelector('.min'),
            secWrap = document.querySelector('.sec'),
            min = 0,
            sec = 0;

        let watch = setInterval(function () {
            if (sec === 60) {
                min += 1;
                minWrap.textContent = min;
                sec = 0;
                secWrap.textContent = sec;
            } else {
                sec += 1;
                secWrap.textContent = sec;
            }

        }, 1000)

        meditation.addEventListener('click', function () {
            if (numOfClick === 0) {
                numOfClick += 1;
                clearInterval(watch);
                music.pause();
                music.currentTime = 0;
            } else if (numOfClick === 1) {
                min = 0;
                minWrap.textContent = min;
                sec = 0;
                secWrap.textContent = sec;
                numOfClick = 0;
                appWrap.classList.remove('hide')
            }
        })
    }

    function breath() {
        const waterDrop = new Audio('sound/water-drop.mp3'),
            deepBreath = new Audio('sound/deep-breath.m4a'),
            holdBreath = new Audio('sound/hold-breath.m4a');

        const numberWrap = document.querySelector('.breath__number'),
            totalNumOfBreaths = 30;

        let numOfBreaths = 0;

        return function () {
            numOfBreaths += 1;
            numberWrap.textContent = numOfBreaths;

            switch (numOfBreaths) {
                case totalNumOfBreaths - 1:
                    deepBreath.play();
                    break;
                case totalNumOfBreaths:
                    holdBreath.play();
                    meditation();
                    numOfBreaths = 0;
                    numberWrap.textContent = numOfBreaths;
                    break;
                default:
                    waterDrop.play();
            }
        }
    }

    let breathApp = breath();

    const appWrap = document.querySelector('.breath');
    appWrap.addEventListener('click', breathApp)
})()

