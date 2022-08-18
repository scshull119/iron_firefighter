const animator  = (function () {
    const activeSprite = document.getElementById('ironman-active');
    const staticSprite = document.getElementById('ironman-static');
    let isAirborne = false;

    function getDistance(point1, point2) {
        if (point1.x === point2.x) {
            return Math.abs(point1.y - point2.y);
        }
        if (point1.y === point2.y) {
            return Math.abs(point1.x - point2.x);
        }
        return Math.sqrt(Math.pow(point2.y - point1.y, 2) + Math.pow(point2.x - point1.x, 2));
    }

    function initSprites(initialPos) {
        staticSprite.style.top = `${initialPos.y}px`;
        staticSprite.style.left = `${initialPos.x}px`;
        activeSprite.style.top = `${initialPos.y}px`;
        activeSprite.style.left = `${initialPos.x}px`;
        staticSprite.style.display = 'block';
        activeSprite.style.display = 'none';
    }

    function takeOff() {
        staticSprite.style.display = 'none';
        activeSprite.style.display = 'block';
        isAirborne = true;
    }

    function touchDown() {
        staticSprite.style.display = 'block';
        activeSprite.style.display = 'none';
        isAirborne = false;
    }

    function travel(destination, speed = 1) {
        return new Promise((resolve, reject) => {
            if (!isAirborne) {
                reject('Ironman cannot travel if not airborne.');
            }
            const pos = { x: parseInt(activeSprite.style.left), y: parseInt(activeSprite.style.top) };
            const distance = getDistance(destination, pos);
            const stepCount = Math.ceil(distance / speed);
            const xStep = (destination.x - pos.x) / stepCount;
            const yStep = (destination.y - pos.y) / stepCount;
            let currentStep = 1;

            const ticker = setInterval(() => {
                if (currentStep === stepCount) {
                    clearInterval(ticker);
                    activeSprite.style.top = `${destination.y}px`;
                    activeSprite.style.left = `${destination.x}px`;
                    staticSprite.style.top = `${destination.y}px`;
                    staticSprite.style.left = `${destination.x}px`;
                    resolve(destination);
                } else {
                    pos.x += xStep;
                    pos.y += yStep;
                    activeSprite.style.top = `${Math.round(pos.y)}px`;
                    activeSprite.style.left = `${Math.round(pos.x)}px`;
                    currentStep++;
                }
            });
        });
    }

    function hold(duration) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(duration);
            }, duration);
        });
    }

    return {
        initSprites,
        takeOff,
        touchDown,
        travel,
        hold,
    }
})();
