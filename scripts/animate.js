(function () {
    const activeSprite = document.getElementById('ironman-active');
    const staticSprite = document.getElementById('ironman-static');
    const fireSprite1 = document.getElementById('fire1');
    const fireSprite2 = document.getElementById('fire2');
    const fireSprite3 = document.getElementById('fire3');

    function initSprites() {
        staticSprite.style.top = '104px';
        staticSprite.style.left = '800px';
        activeSprite.style.top = '104px';
        activeSprite.style.left = '800px';
        staticSprite.style.display = 'block';

        fireSprite1.style.top = '115px';
        fireSprite1.style.left = '300px';
        fireSprite1.style.display = 'block';

        fireSprite2.style.top = '210px';
        fireSprite2.style.left = '250px';
        fireSprite2.style.display = 'block';

        fireSprite3.style.top = '800px';
        fireSprite3.style.left = '780px';
        fireSprite3.style.display = 'block';

    }

    function animate() {
        staticSprite.style.display = 'none';
        activeSprite.style.display = 'block';

        travel({ x: 315, y: 720});
    }

    function getDistance(point1, point2) {
        if (point1.x === point2.x) {
            return Math.abs(point1.y - point2.y);
        }
        if (point1.y === point2.y) {
            return Math.abs(point1.x - point2.x);
        }
        return Math.sqrt(Math.pow(point2.y - point1.y, 2) + Math.pow(point2.x - point1.x, 2));
    }

    function travel(destination, speed = 1) {
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
            } else {
                pos.x += xStep;
                pos.y += yStep;
                activeSprite.style.top = `${Math.round(pos.y)}px`;
                activeSprite.style.left = `${Math.round(pos.x)}px`;
                currentStep++;
            }
        });
    }

    initSprites();

    setTimeout(animate, 1000);
})();
