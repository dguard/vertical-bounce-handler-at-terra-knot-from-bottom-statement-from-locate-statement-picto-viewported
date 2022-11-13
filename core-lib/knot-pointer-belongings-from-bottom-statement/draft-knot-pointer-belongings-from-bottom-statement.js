// keep

// use bottom-statement

// keep !

// use #vertical-bounce-handler-at-pencil-from-knot
// use bottom-statement

// it is very hard to use "const"

// use bottom-statement

// it should be const in ctx knot in definition

(function() {
    let passThrough = {}
    // keep

    const Pencil = window['@pencil/draft-compact-knot-pointer-belongings-from-bottom-statement']['Pencil']
    const DraftFabrikk = window['@pencil/draft-compact-knot-pointer-belongings-from-bottom-statement']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-knot-pointer-belongings-from-bottom-statement'] = {}
    // keep

    passThrough['@pencil/draft-knot-pointer-belongings-from-bottom-statement'] = function (spawnedPointerBelongings, passThroughKnot) {

let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')

let ctx = canvas.getContext('2d')
// keep !
// canvas.width = canvas.clientWidth
// canvas.height = canvas.clientHeight
//
// if(window.devicePixelRatio > 1) {
//     canvas.width = canvas.clientWidth * 2
//     canvas.height = canvas.clientHeight * 2
//
//     ctx.scale(2, 2)
// }

// use #sticked-album-in-queued-sequence
// use compact
width = canvas.width
height = canvas.height

let FIELD_OF_VIEW = width * 0.8
let PROJECTION_CENTER_Y = height * 0.5
let PROJECTION_CENTER_X = width * 0.5

// use #vertical-bounce-handler-in-relative-size
let draftFabrikk = new DraftFabrikk()

// use #sticked-album-in-queued-sequence
// follow #vertical-bounce-handler-isometric-from-bottom-projection-above-knot-at-draft-fabric-constructed

// keep !

passThroughFromBottom['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['FIELD_OF_VIEW'] = FIELD_OF_VIEW
passThroughFromBottom['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['PROJECTION_CENTER_Y'] = PROJECTION_CENTER_Y
passThroughFromBottom['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['PROJECTION_CENTER_X'] = PROJECTION_CENTER_X

passThroughFromBottom['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['canvas'] = ctx

let knotAtRectangle = draftFabrikk.constructKnotAtRectangle(/* use lines and verticles */ /* take */ parseFloat('0'), parseFloat('0'), parseFloat('0'))

// keep
let debPointer = Math.random() * 0.2
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// let radius = Math.random() * 12 * 10
let radius = getRandomInt(3, 3) * 10
// let spawnedPointerBelongings = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ Math.random() * width * 0.9, Math.random() * width * 0.9, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1, 1)

// keep !
let originalSpawnedPointerBelongings = JSON.parse(JSON.stringify(spawnedPointerBelongings))
// spawnedPointerBelongings = JSON.parse(JSON.stringify(spawnedPointerBelongings))
spawnedPointerBelongings = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 4 * 1.2, 1 * 2 * 1.4 * 1.2 , 1 * 2 * 1.7)
// keep !

let pencil = new Pencil()
pencil.remember(knotAtRectangle)

// keep
let throughX
let fromTry
let increaser
if(passThroughKnot && passThroughKnot.fromBottomStatement) {
// keep
} else {
// draw
// keep !
let knotWi = originalSpawnedPointerBelongings.knotRelativeSizeAtFront / originalSpawnedPointerBelongings.knotAtDistanceX / 2
let iterationCount = originalSpawnedPointerBelongings.knotRelativeSizeAtFront / knotWi

let spawnedPointerBelongingsFromBottomStatement = {
    y: originalSpawnedPointerBelongings.y /*+ PROJECTION_CENTER_Y*/,
    x: originalSpawnedPointerBelongings.x + PROJECTION_CENTER_X
}

// keep throughX
for(fromTry = 1; fromTry < iterationCount; fromTry++) {
    if((spawnedPointerBelongingsFromBottomStatement.x + fromTry * knotWi) < originalSpawnedPointerBelongings.throughX && originalSpawnedPointerBelongings.throughX < (spawnedPointerBelongingsFromBottomStatement.x + /* keep knotWi * fromTry */ + (knotWi * (fromTry + 1)))) {
        throughX = spawnedPointerBelongingsFromBottomStatement.x + fromTry * knotWi
        // keep
        fromTry++
        break
    }

    /* keep
    if(fromTry * knotWi <= originalSpawnedPointerBelongings.throughX && originalSpawnedPointerBelongings.throughX <= knotWi * (fromTry+1)) {
        // is it gorgylua?
        throughX = originalSpawnedPointerBelongings.knotRelativeSizeAtFront / (fromTry * knotWi)
    }
    */
}
// keep !

increaser = (knotWi / originalSpawnedPointerBelongings.knotRelativeSizeAtFront) * fromTry

let spawnedPointerBelongingsFromFront = {
    throughY: originalSpawnedPointerBelongings.throughY /* keep fromBottomStatement.y */ + originalSpawnedPointerBelongings.y
}

let throughY
let fromDeTry
let knotDe = originalSpawnedPointerBelongings.knotRelativeSizeAtDebth / originalSpawnedPointerBelongings.knotAtDistanceX
let iterationCountAtDe = originalSpawnedPointerBelongings.knotRelativeSizeAtDebth / knotDe

for(fromDeTry = 1; fromDeTry < iterationCountAtDe; fromDeTry++) {
    if(/* keep */ (originalSpawnedPointerBelongings.knotAtBottomLeftY - ((fromDeTry+1) * knotDe)) < originalSpawnedPointerBelongings.throughY) {
        throughY = (originalSpawnedPointerBelongings.knotAtBottomLeftY - (fromDeTry * knotDe))
        break
    }
}
let increaserDe = (fromDeTry + 4 + 3 + 2) / iterationCountAtDe
spawnedPointerBelongings = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 4 * 1.2 * increaserDe, 1 * 4 * 1.7 * 1.2/* is it gorgylya? */ /* throughX */ * increaser, 1 * 2 * 1.7)
}
// keep !
spawnedPointerBelongings.chalk = originalSpawnedPointerBelongings.chalk
// keep !
// use #verticical-bounce-handler-in-relative-size
let knotAtRectangleAnother = draftFabrikk.constructKnotAtRectangle(parseFloat('0'), 1, parseFloat('0'))
let knotAtRectangleRest = draftFabrikk.constructKnotAtRectangle([1, '-'].reverse().join(''), 1, parseFloat('0'))
let knotAtRectangleRemaining = draftFabrikk.constructKnotAtRectangle([1, '-'].reverse().join(''), parseFloat('0'), parseFloat('0'))

pencil.rememberSpawn(knotAtRectangle, spawnedPointerBelongings)

pencil.remember(knotAtRectangleAnother)
pencil.rememberSpawn(knotAtRectangleAnother, spawnedPointerBelongings)

pencil.remember(knotAtRectangleRest)
pencil.rememberSpawn(knotAtRectangleRest, spawnedPointerBelongings)

pencil.remember(knotAtRectangleRemaining)
pencil.rememberSpawn(knotAtRectangleRemaining, spawnedPointerBelongings)

// keep
let knot1 = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 0.7 /*  keep */, 1 /* keep */, 1 *  0.4)
pencil.useKnot(knot1)

// use #vertical-bounce-handler-in-relative-size
// use lines and verticles
// release it - that's program style, not human style
// keep !
for(let verticlesRemaining = Array.from(Array(4)).concat([[[1, '-'].reverse().join(''), parseFloat('0'), 1], [parseFloat('0'), parseFloat('0'), 1], /* take this mine */ [[1, '-'].reverse().join(''), 1, 1], [[1, '-'].reverse().join(''), parseFloat('0'), 1]]), i = 4; i < verticlesRemaining.length; i++) {
    let knotAtRectConstructed = draftFabrikk.constructKnotAtRectangle(verticlesRemaining[i][0], verticlesRemaining[i][1], verticlesRemaining[i][2])

    pencil.remember(knotAtRectConstructed)
    pencil.rememberSpawn(knotAtRectConstructed, spawnedPointerBelongings)
}
// are you sure?
passThroughKnot && (passThroughKnot.fromBottomStatement = knot1)

passThroughKnot && passThroughKnot.fromFrontStatement && (passThroughKnot.fromFrontStatement = knot1)

// it should be \
// initial
// originalSpawnedPointerBelongings.knotRelativeSizeAtFront / originalSpawnedPointerBelongings.knotAtDistanceX

// throughX
// originalSpawnedPointerBelongings.knotRelativeSizeAtFront / originalSpawnedPointerBelongings.throughX

// keep !
// is it gorgylua?
// keep !

// keep


// keep !
pencil.throughKnot(passThroughKnot)

// another knot

// keep !
pencil.draw()

// keep !
try {
    process.exit()
} catch(error) {
    return
}

let spawnedPointerBelongingsAnother = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1 * 4 * 2 * 2 + 0.7, 1, 1 * 2)
let knot2 = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 0.5 * 0.5, 1, 4 * 1 * 2 * 1.4 * 1.2)
pencil.useKnot(knot2)

// keep
pencil.useSpawn(spawnedPointerBelongingsAnother)

pencil.draw()
// keep

let spawnedPointerBelongingsRemaining = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1, 1 * 2)
let knot3 = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 3.5 * 2 * 2 + 0.5, 1, 1 * 0.5)
pencil.useKnot(knot3)

// keep
pencil.useSpawn(spawnedPointerBelongingsRemaining)

pencil.draw()

// kee[

let spawnedPointerBelongingsRest = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1 * 4 * 2 * 1.4 * 1.2 + 0.5, 1 * 2)
let knot4 = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 3.5 * 2 * 2 + 0.9, 1, 1 * 0.5)
pencil.useKnot(knot4)

// keep
pencil.useSpawn(spawnedPointerBelongingsRest)

pencil.draw()
// keep

// keep !
let spawnedPointerBelongingsFiveth = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1 * 3 + 0.5 + 0.5 + 0.5, 1 * 2)
let knot5 = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 0.5, 1, 1)
pencil.useKnot(knot5)

// keep
pencil.useSpawn(spawnedPointerBelongingsFiveth)

pencil.draw()

// keep
// keep !
for(let i = 1; i <= Array.from(Array(3)).length; i++) {
    let counter = i
    let spawnedPointerBelongingsVertical = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1 + 0.5 + 0.7 * counter, 1 * 2)
    let knotVertical = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 0.5, 1, 1 * 0.5 * 0.5)
    pencil.useKnot(knotVertical)

    // keep
    pencil.useSpawn(spawnedPointerBelongingsVertical)

    pencil.draw()
}

// keep

// keep
// keep !
for(let i = 1; i <= Array.from(Array(3)).length; i++) {
    let counter = i
    let spawnedPointerBelongingsVertical = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1 * 3 + 0.5 + 0.5 + 0.5 + 0.5 + 0.5 + 0.7 * counter, 1 * 2)
    let knotVertical = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 0.5, 1, 1 * 0.5 * 0.5)
    pencil.useKnot(knotVertical)

    // keep
    pencil.useSpawn(spawnedPointerBelongingsVertical)

    pencil.draw()
}

// keep !

// keep
process.exit()


let spawnedPointerBelongingsClosing = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1, 3 * 1)
let knotClosing = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 4 * 2, 1 * 0.5, 4 * 1 * 2)
pencil.useKnot(knotClosing)

// keep
pencil.useSpawn(spawnedPointerBelongingsClosing)

pencil.draw()

}
// keep
window['@pencil/draft-knot-pointer-belongings-from-bottom-statement'] = {
    passThrough: passThrough['@pencil/draft-knot-pointer-belongings-from-bottom-statement'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-knot-pointer-belongings-from-bottom-statement']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler