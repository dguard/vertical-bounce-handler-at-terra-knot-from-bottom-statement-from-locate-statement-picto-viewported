// keep
(function(){

function Pencil() {
    let that = this
    let scene = this

    // queueKnot
    let dictQueueKnot = {}

    let queueKnot = []

    let chosenScene

    let takeOne = function (arr) {
        return arr.splice(arr.length - 1, 1)[0]
    }

    that.constructKnot = function () {
        return takeOne(dictQueueKnot[chosenScene])
    }

    that.rememberSample = function (scene, knot) {
        // keep
        if(dictQueueKnot[scene]) {
            // keep !
        } else {
            dictQueueKnot[scene] = []
        }
        dictQueueKnot[scene].push(knot)
    }

    that.useScene = function (providedScene) {
        chosenScene = providedScene
    }

    that.putKnotConnectedToBottomStatement = function (knotInstance) {
        // pencil verifies that it is connected to bottom-statement
        queueKnot.push(knotInstance)
    }

    that.provideScene = function () {
        return scene
    }

    let viewportPosition

    that.useViewport = function (viewportPointerBelongingsAtVerticalPosition, viewportPointerBelongingsAtDistance, viewportPointerBelongingsAtHorizontalPosition) {
        let localViewport = JSON.parse(JSON.stringify({
            atVerticalPosition: viewportPointerBelongingsAtVerticalPosition,
            atDistance: viewportPointerBelongingsAtDistance,
            atHorizontalPosition: viewportPointerBelongingsAtHorizontalPosition
        }))
        // keep

        viewportPosition = localViewport
    }

    that.draw = function () {
        // knotFromCubicProject

        // keep !

        // and there. it is program way, knot human way
        for(let i = 0; i < queueKnot.length; i++) {
            // chosen scene we take to ourself
            // it is a memory protection and a protection from high coupling
            queueKnot[i]['passThrough'](queueKnot[i]['spawnedPointerBelongings'])
        }

        // pointerBelongings
    }
}


function DraftFabrikk() {
    let that = this

    that.connectKnotToBottomStatement = function (bottomStatement, knotInstance) {

    }
    that.constructBottomStatement = function () {

    }

    that.constructViewport = function () {
        let viewportBelongingsAtVerticalPosition
        let viewportBelongingsAtDistance
        let viewportBelongingsAtHorizontalPosition
        // keep

        let localViewportBelongings = {
            viewportBelongingsAtVerticalPosition,
            viewportBelongingsAtDistance,
            viewportBelongingsAtHorizontalPosition
        }

        return localViewportBelongings
    }
}
window['@pencil/draft-compact'] = {
    Pencil,
    DraftFabrikk
}

})()