// keep

// use bottom-statement

// keep @core-lib/draft-handle-at-bounced.js
(function () {


let bouncedPoints = {}

let sequencedPoints = {}
let latestSequencedPointer
let anotherSequencePointer
let restPointer
let remainingPointer

let bottomProjectionPointer
let topLeftProjectionPointer
let topRightProjectionPointer


function handleProjectAt1stIteration(v1Project, v2Project, /* keep */ profileRatio, frontRatio, debthRatio, i) {
    // keep
    const PROJECTION_CENTER_Y = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['PROJECTION_CENTER_Y']

    const PROJECTION_CENTER_X = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['PROJECTION_CENTER_X']

    if([2].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (v1Project.y - PROJECTION_CENTER_Y) * profileRatio + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X) * frontRatio + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (v2Project.y - PROJECTION_CENTER_Y) * profileRatio + PROJECTION_CENTER_Y,
            x: (v2Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }
    }
    if([0].indexOf(i) !== -1) {
        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (v2Project.y - PROJECTION_CENTER_Y) * 1 + PROJECTION_CENTER_Y,
            x: (v2Project.x - PROJECTION_CENTER_X) * frontRatio + PROJECTION_CENTER_X
        }
        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x
    }

    if([6].indexOf(i) !== -1) {
        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: ((sequencedPoints[anotherSequencePointer].v2Project.y - PROJECTION_CENTER_Y)) + PROJECTION_CENTER_Y,
            x: ((sequencedPoints[anotherSequencePointer].v2Project.x - PROJECTION_CENTER_X)) + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (v2Project.y - PROJECTION_CENTER_Y) * 1 + PROJECTION_CENTER_Y,
            x: (v2Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }
        bottomProjectionPointer = i
    }
    if([4].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (v1Project.y - PROJECTION_CENTER_Y) * profileRatio + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (v2Project.y - PROJECTION_CENTER_Y) * debthRatio + PROJECTION_CENTER_Y,
            x: (v2Project.x - PROJECTION_CENTER_X) * debthRatio + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }
        v1Project = undefined
        v2Project = undefined

        restPointer = i
    }

    if([5].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (v1Project.y - PROJECTION_CENTER_Y) * debthRatio + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X) * debthRatio + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: ((sequencedPoints[latestSequencedPointer].v2Project.y - PROJECTION_CENTER_Y) + v2Project.y - PROJECTION_CENTER_Y) * debthRatio + PROJECTION_CENTER_Y,
            x: (v2Project.x - PROJECTION_CENTER_X) * debthRatio + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }

        v1Project = undefined
        v2Project = undefined

        anotherSequencePointer = i
    }
    if([3].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (v1Project.y - PROJECTION_CENTER_Y) * profileRatio + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        // keep
        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (v2Project.y - PROJECTION_CENTER_Y) * 1 + PROJECTION_CENTER_Y,
            x: (v2Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }
        latestSequencedPointer = i
    }
    if([1].indexOf(i) !== -1) {
        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (v2Project.y - PROJECTION_CENTER_Y) * profileRatio + PROJECTION_CENTER_Y,
            x: (v2Project.x - PROJECTION_CENTER_X) * frontRatio + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (v1Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X) * frontRatio + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x
    }

    if([7].indexOf(i) !== -1) {
        v1Project = undefined
        v2Project = undefined
    }
    if([8].indexOf(i) !== -1) {
        v1Project = undefined
        v2Project = undefined
    }
}

function handleProjectAt2ndIteration(loopPointer, v1Project, v2Project, profileRatio, frontRatio, debthRatio, i, frontRadius) {
    let y, x

    // keep
    let loopPointerBelongings = JSON.stringify(loopPointer)

    const PROJECTION_CENTER_Y = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['PROJECTION_CENTER_Y']

    const PROJECTION_CENTER_X = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['PROJECTION_CENTER_X']


    if([2].indexOf(i) !== -1) {
        // keep !
        // let loopPointerBelongings = JSON.stringify(loopPointer)
        // #sticked-album-in-sequence !
        // continue
        return loopPointerBelongings
    }
    if([0].indexOf(i) !== -1) {
        // keep !
        // #sticked-album-in-sequence !
        // continue
        return loopPointerBelongings
    }

    if([6].indexOf(i) !== -1) {
        // keep !
        // #sticked-album-in-sequence !
        // continue
        return loopPointerBelongings
    }
    if([4].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (v1Project.y - PROJECTION_CENTER_Y) * profileRatio + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (sequencedPoints[bottomProjectionPointer].v1Project.y - PROJECTION_CENTER_Y - frontRadius * profileRatio) + PROJECTION_CENTER_Y,
            x: (sequencedPoints[bottomProjectionPointer].v1Project.x - PROJECTION_CENTER_X) * 1 + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }
        topLeftProjectionPointer = i
    }


    if([5].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (sequencedPoints[topLeftProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
            x: (sequencedPoints[topLeftProjectionPointer].v2Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (sequencedPoints[bottomProjectionPointer].v1Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
            x: (sequencedPoints[bottomProjectionPointer].v1Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }

        anotherSequencePointer = i
    }
    if([3].indexOf(i) !== -1) {
        // keep !
        // #sticked-album-in-sequence !
        // continue
        return loopPointerBelongings
    }
    if([1].indexOf(i) !== -1) {
        // keep !
        // #sticked-album-in-sequence !
        // continue
        return loopPointerBelongings
    }

    if([7].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (v1Project.y - PROJECTION_CENTER_Y) * profileRatio + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X) * frontRatio + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        // let me see
        // bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
        //     y: (v2Project.y - PROJECTION_CENTER_Y) * debthRatio + PROJECTION_CENTER_Y,
        //     x: (v2Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
        // }
        //
        // y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        // x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x
        //
        // v2Project.y = y
        // v2Project.x = x
        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (sequencedPoints[topLeftProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
            x: (v1Project.x - PROJECTION_CENTER_X - (sequencedPoints[topLeftProjectionPointer].v1Project.x - sequencedPoints[topLeftProjectionPointer].v2Project.x)) + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x

        sequencedPoints[i] = {
            "v1Project": v1Project,
            "v2Project": v2Project
        }
        topRightProjectionPointer = i
    }
    if([8].indexOf(i) !== -1) {
        bouncedPoints[[v1Project.y, v1Project.x].join('_')] = {
            y: (sequencedPoints[topRightProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
            x: (sequencedPoints[topRightProjectionPointer].v2Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v1Project.y, v1Project.x].join('_')].y
        x = bouncedPoints[[v1Project.y, v1Project.x].join('_')].x

        v1Project.y = y
        v1Project.x = x

        bouncedPoints[[v2Project.y, v2Project.x].join('_')] = {
            y: (sequencedPoints[topLeftProjectionPointer].v2Project.y - PROJECTION_CENTER_Y) + PROJECTION_CENTER_Y,
            x: (sequencedPoints[topLeftProjectionPointer].v2Project.x - PROJECTION_CENTER_X) + PROJECTION_CENTER_X
        }

        y = bouncedPoints[[v2Project.y, v2Project.x].join('_')].y
        x = bouncedPoints[[v2Project.y, v2Project.x].join('_')].x

        v2Project.y = y
        v2Project.x = x
    }
}
window['@pencil/draft-handle-knot-pointer-belongings-from-bottom-statement'] = {
    handleProjectAt1stIteration,
    handleProjectAt2ndIteration
}

})()
// don't stay here
// use vertical-bounce-handler
