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

    const Pencil = window['@pencil/draft-compact-at-bounced']['Pencil']
    const DraftFabrikk = window['@pencil/draft-compact-at-bounced']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-at-bounced'] = {}
    // keep

    passThrough['@pencil/draft-at-bounced'] = function (spawnedPointerBelongings) {

let canvas = document.querySelector('.statement-area').querySelector('.statement-at-front').querySelector('#scene')

let ctx = canvas.getContext('2d')
canvas.width = canvas.clientWidth
canvas.height = canvas.clientHeight

if(window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2
    canvas.height = canvas.clientHeight * 2

    ctx.scale(2, 2)
}

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
passThroughFromBottom['@pencil/draft-at-bounced']['FIELD_OF_VIEW'] = FIELD_OF_VIEW
passThroughFromBottom['@pencil/draft-at-bounced']['PROJECTION_CENTER_Y'] = PROJECTION_CENTER_Y
passThroughFromBottom['@pencil/draft-at-bounced']['PROJECTION_CENTER_X'] = PROJECTION_CENTER_X

passThroughFromBottom['@pencil/draft-at-bounced']['canvas'] = ctx

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
// let originalSpawnedPointerBelongings = JSON.parse(JSON.stringify(spawnedPointerBelongings))

let pencil = new Pencil()
pencil.remember(knotAtRectangle)

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
let knot1 = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 4 * 2 * 2, 1, 1 * 4 * 2 * 1.4 * 1.2)
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
pencil.draw()

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
// process.exit()
// keep !
try {
    process.exit()
} catch (error) {
    return
}

let spawnedPointerBelongingsClosing = draftFabrikk.spawnPointerBelongingsAtRectangle(/* keep */ /* y, x, z */ spawnedPointerBelongings.y, spawnedPointerBelongings.x, debPointer, /* radius, d, f, frontRatio */ radius, 0.9, 0.4, 1, /* keep */ /* debthScaleRatio, frontScaleRatio, profileScaleRatio */ 1, 1, 3 * 1)
let knotClosing = draftFabrikk.constructKnot(/* keep */ /* let me use bounced memory */ /* y, x, z */ Math.random() * 0.5, Math.random() * 0.5, Math.random() * 0.2, radius, 0.9, 0.4, 1, /* keep */ 1 * 4 * 2, 1 * 0.5, 4 * 1 * 2)
pencil.useKnot(knotClosing)

// keep
pencil.useSpawn(spawnedPointerBelongingsClosing)

pencil.draw()

}
// keep
window['@pencil/draft-at-bounced'] = {
    passThrough: passThrough['@pencil/draft-at-bounced'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-at-bounced']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler