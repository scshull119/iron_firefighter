let ticker = null;

function initSprites() {
    const activeSprite = document.getElementById('ironman-active');
    const staticSprite = document.getElementById('ironman-static');
    
    staticSprite.style.top = '720px';
    staticSprite.style.left = '315px';
    activeSprite.style.top = '720px';
    activeSprite.style.left = '315px';
    staticSprite.style.display = 'block';
}

function animate(target) {
    const activeSprite = document.getElementById('ironman-active');
    const staticSprite = document.getElementById('ironman-static');

    staticSprite.style.display = 'none';
    activeSprite.style.display = 'block';

    initialPos = { x: parseInt(activeSprite.style.left), y: parseInt(activeSprite.style.top) };
    pos = { ...initialPos };

    console.log('starting flight');

    ticker = setInterval(travel, 5);
}

function travel() {
    const activeSprite = document.getElementById('ironman-active');
    pos.x = pos.x + 1;
    console.log(pos);
    activeSprite.style.left = `${pos.x}px`;

    if (pos.x > 800) {
        clearInterval(ticker);
        console.log('arrived');
    }
}

initSprites();

setTimeout(animate, 1000);
