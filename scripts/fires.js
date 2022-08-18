const fires = [ {x:300, y:115, isOut: false}, {x:210, y:250, isOut: false}, {x:800, y:780, isOut: false} ]

const fire1 = document.getElementById('fire1');
const fire2 = document.getElementById('fire2');
const fire3 = document.getElementById('fire3');

const fireElements = [];

fires.forEach((fire, idx)=> {
    fireEl = document.getElementById(`fire${idx + 1}`);
    fireElements.push(fireEl);
});

function initFires(){
    fires.forEach((fire, idx) => {
        fireElements[idx].style.top = `${fire.y}px`;
        fireElements[idx].style.left = `${fire.x}px`;
        fireElements[idx].style.display = 'block';
    });
}

function putOutFire(xLoc, yLoc) {
    fires.forEach((fire, idx) => {
        if (fire.x === xLoc && fire.y === yLoc) {
            fireElements[idx].style.display = 'none';
        }
    });
}

initFires();
