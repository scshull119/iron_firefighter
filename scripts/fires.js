const fire1 = document.getElementById('fire1');
const fire2 = document.getElementById('fire2');
const fire3 = document.getElementById('fire3');

    function initFires(){
        fire1.style.top = '250px';
        fire1.style.left = '210px';
        fire1.style.display = 'block';

        fire2.style.top = '115px';
        fire2.style.left = '300px';
        fire2.style.display = 'block';

        fire3.style.top = '780px';
        fire3.style.left = '800px';
        fire3.style.display = 'block';

    }

    function putOutFire(xLoc, yLoc) {
        const posFire1 = { x: parseInt(fire1.style.left), y: parseInt(fire1.style.top) };
        const posFire2 = { x: parseInt(fire2.style.left), y: parseInt(fire2.style.top) };
        const posFire3 = { x: parseInt(fire3.style.left), y: parseInt(fire3.style.top) };

        if (posFire1.x == xLoc && posFire1.y == yLoc){
            fire1.style.display = 'none';
        } else if (posFire2.x == xLoc && posFire2.y == yLoc){
            fire2.style.display = 'none';
        } else if (posFire3.x == xLoc && posFire3.y == yLoc){
            fire3.style.display = 'none';
        }
}

initFires();
