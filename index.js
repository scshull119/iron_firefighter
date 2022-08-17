var waters = [ {x:315, y:720} ]
var fires  = [ {x:300, y:115, isOut: false}, {x:210, y:250, isOut: false}, {x:800, y:780, isOut: false} ]

function getActiveFires(){
    activeFiresArray = []
    for (let i = 0; i < fires.length; i++) {
        if(fires[i].isOut == false){
            activeFiresArray.push(i)
        }
      }
    return activeFiresArray
}

function distanceBetweenPoints(point1,point2){
    x1 = point1.x
    y1 = point1.y
    x2 = point2.x
    y2 = point2.y
    xDiff = x1-x2
    yDiff = y1-y2
    return Math.sqrt(xDiff*xDiff + yDiff*yDiff)
}

function shortestDistanceToWater(ironMan){
    shortestDistance = {index:-1,distance:9999999}
    for (let i = 0; i < waters.length; i++) {
        distanceBetween =  distanceBetweenPoints(ironMan,waters[i])
        if( distanceBetween <= shortestDistance.distance) {
            shortestDistance.distance = distanceBetween
            shortestDistance.index = i
        }
    }
    return shortestDistance
}

function shortestDistanceToFire(ironMan){
    var activeFires = getActiveFires()
    shortestDistance = {index:-1,distance:9999999}
    for (let i = 0; i < activeFires.length; i++) {
        distanceBetween =  distanceBetweenPoints(ironMan,fires[activeFires[i]])
        if( distanceBetween <= shortestDistance.distance) {
            shortestDistance.distance = distanceBetween
            shortestDistance.index = activeFires[i]
        }
   }
    return shortestDistance
}
ironMan = waters[0]
console.log('Iron Man starts at WATER at', ironMan)

var activeFires = getActiveFires()
for (let i = 0; i < activeFires.length; i++) {
    closestFireLocationIndex = shortestDistanceToFire(ironMan)['index']
    closestFireLocation = fires[closestFireLocationIndex]
    ironMan = closestFireLocation
    fires[closestFireLocationIndex].isOut = true
    console.log('Iron Man puts out FIRE at', ironMan)
    if (i < activeFires.length - 1) {
        closestWaterLocationIndex = shortestDistanceToWater(ironMan)['index']
        closestWaterLocation = waters[closestWaterLocationIndex]
        ironMan = closestWaterLocation
        console.log('Iron Man gets WATER at', ironMan)
    }
}

console.log('Iron Man puts out all the fires. Yay!')
