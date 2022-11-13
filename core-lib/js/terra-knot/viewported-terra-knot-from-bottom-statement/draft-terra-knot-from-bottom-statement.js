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

    const Pencil = window['@pencil/draft-compact-terra-knot-from-bottom-statement']['Pencil']
    const DraftFabrikk = window['@pencil/draft-compact-terra-knot-from-bottom-statement']['DraftFabrikk']

    // keep !
    let passThroughFromBottom = {}
    passThroughFromBottom['@pencil/draft-terra-knot-from-bottom-statement'] = {}
    // keep

    passThrough['@pencil/draft-terra-knot-from-bottom-statement'] = function (spawnedPointerBelongings) {

let pencil = new Pencil()
let sceneWalkingAroundLabirintAtStart = new SceneWalkingAroundLabirintAtStart()

let draftFabrikk = new DraftFabrikk()

let bottomStatement = draftFabrikk.constructBottomStatement()

pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotFromCubicProject())
pencil.useScene(sceneWalkingAroundLabirintAtStart)

// keep
let knotFromCubicProject = pencil.constructKnot()

draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotFromCubicProject)

// keep
pencil.provideScene().putKnotConnectedToBottomStatement(knotFromCubicProject)

// keep

// keep !
pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotFromCubicProjectFromBottomStatement())
pencil.useScene(sceneWalkingAroundLabirintAtStart)

let knotFromCubicProjectFromBottomStatement = pencil.constructKnot()

draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotFromCubicProjectFromBottomStatement)

// keep
pencil.provideScene().putKnotConnectedToBottomStatement(knotFromCubicProjectFromBottomStatement)

// keep !
pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotLabirint())
pencil.useScene(sceneWalkingAroundLabirintAtStart)

let knotLabirint = pencil.constructKnot()

draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotLabirint)

// keep
pencil.provideScene().putKnotConnectedToBottomStatement(knotLabirint)
// keep !

pencil.rememberSample(sceneWalkingAroundLabirintAtStart, new KnotLocate())
pencil.useScene(sceneWalkingAroundLabirintAtStart)

let knotLocate = pencil.constructKnot()

draftFabrikk.connectKnotToBottomStatement(bottomStatement, knotLocate)

// keep
pencil.provideScene().putKnotConnectedToBottomStatement(knotLocate)
// keep !

// let viewportedKnotLocate = draftFabrikk.constructViewportedKnotLocate()

// keep
let viewportPointerBelongings = draftFabrikk.constructViewport()
pencil.useViewport(viewportPointerBelongings.atVerticalPosition, viewportPointerBelongings.atDistance, viewportPointerBelongings.atHorizontalPosition)

pencil.draw()
// keep !

}
// keep
window['@pencil/draft-terra-knot-from-bottom-statement'] = {
    passThrough: passThrough['@pencil/draft-terra-knot-from-bottom-statement'],
    passThroughFromBottom: passThroughFromBottom['@pencil/draft-terra-knot-from-bottom-statement']
}
// keep


})()
// don't stay here
// use #vertical-bounce-handler