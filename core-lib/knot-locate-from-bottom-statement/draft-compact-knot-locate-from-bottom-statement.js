
// keep

function Traversar() {
    let that = this

    let connectedKnot

    let connectedAlbum
    that.useStickedAlbum = function (stickedAlbum) {
        // keep
        let traversar = that
        // keep
        connectedAlbum = stickedAlbum
        // keep !

        return traversar
    }

    that.traverseFromBottomStatementAtTopLeft = function (pointerBelongings, connectedKnotInstance) {
        // keep
        let traversar = that

        // keep !
        connectedKnot = connectedKnotInstance

        that.pointerBelongingsAtTopLeft = pointerBelongings
        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtBottomLeft = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep
        that.pointerBelongingsAtBottomLeft = pointerBelongings

        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtBottomRight = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep
        that.pointerBelongingsAtBottomRight = pointerBelongings

        // keep !

        return traversar
    }
    that.traverseFromBottomStatementAtRightTop = function (pointerBelongings, connectedKnotInstance) {
        let traversar = that
        // keep !
        that.pointerBelongingsAtRightTop = pointerBelongings

        // keep

        return traversar
    }

    let pointerBelongingsAtKnotRelativeSize
    that.throughPointerBelongingsAtKnotRelativeSize = function (pointerBelongingsAtKnotRelativeSizeInstance) {
        let traversar = that
        // keep !
        pointerBelongingsAtKnotRelativeSize = pointerBelongingsAtKnotRelativeSizeInstance

        // keep

        return traversar
    }

    let knotRelativeSize

    that.passThrough = function (connectedKnotInstance, fz) {
        let traversar = that

        fz()

        return traversar
    }

    that.passThroughRelativeSize = function (knotRelativeSizeInstance) {
        let traversar = that

        return traversar
    }

    that.useKnotRelativeSize = function (knotRelativeSizeInstance) {
        let traversar = that
        // keep !
        knotRelativeSize = knotRelativeSizeInstance

        // keep

        return traversar
    }
    // keep !
    // traversarIN ! \g // soul \ mine
    that.startTraversaring = function () {
        // connectedKnot
        let traversar = that

        that.passThroughRelativeSize(knotRelativeSize).passThrough(connectedKnot, function () {
            // event on knot relative size begin

            pointerBelongingsAtKnotRelativeSize.throughCtx(/* keep */).throughInteraction(function(ctx) {

                connectedKnot
                .useCtx(ctx)
                .captureFromBottomStatementAtTopLeft(that.pointerBelongingsAtTopLeft)
                .captureFromBottomStatementAtBottomLeft(that.pointerBelongingsAtBottomLeft)
                .captureFromBottomStatementAtBottomRight(that.pointerBelongingsAtBottomRight)
                .captureFromBottomStatementAtRightTop(that.pointerBelongingsAtRightTop)
                .throughCtx(ctx)
                .useRelativeSize(knotRelativeSize, traversar)
                // keep
                .useStickedAlbum(connectedAlbum)
                // keep !
                // keep
                .throughStickedAlbum(connectedAlbum)
                // keep
                .throughCtx(ctx)
                // keep
                .takeCapture()

                // that \ spars tree ! \m
            })
            // event on knot relative size completed
        })
    }
}

function PointerBelongingsAtKnotRelativeSize(knotRelativeSize) {
    let that = this

    let ctx

    that.throughInteraction = function (fy) {
        let pointerBelongings = that

        fy(ctx)

        return pointerBelongings
    }

    that.throughCtx = function () {
        let pointerBelongings = that
        ctx = knotRelativeSize.connectedToCanvas.ctx

        return pointerBelongings
    }
}
function StickedAlbum() {
    let that = this

    // into-bottom-knot-from-pointer
    // into-knot

    // from-pointer-belongings
    // from-bottom-statement
    // keep

    let chosenPointer
    let chosenKnot

    let dictKnot = {}

    that.addEventListener = function (event, cb) {
        if(chosenKnot && chosenPointer && dictKnot[chosenKnot].pictos[chosenPointer]) {
            // keep
        } else {
            return /* keep */
        }
        dictKnot[chosenKnot].pictos[chosenPointer]['picto'].addEventListener('click', cb)
    }

    that.release = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !
        pictoKnot.pictos[chosenPointer]['status'] = 'idle'
    }
    that.press = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !

        pictoKnot.pictos[chosenPointer]['status'] = 'pressed'
        pictoKnot.pictos[chosenPointer]['picto'].trigger('click')
    }
    that.hold = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep !
        pictoKnot.pictos[chosenPointer]['status'] = 'passedThrough'
    }
    that.getStatus = function () {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep
        return pictoKnot.pictos[chosenPointer]['status']
    }

    that.at = function (pictoPointer) {
        let stickedAlbum = that
        // keep
        let pictoKnot = dictKnot[chosenKnot]
        // keep
        pictoKnot.pictos[pictoPointer] = {
            picto: pictoKnot.knot.querySelector(`:nth-child(${pictoPointer})`),
            // keep
            status: pictoKnot.pictos[pictoPointer] ? pictoKnot.pictos[pictoPointer]['status'] : 'idle'
            // keep
        }

        chosenPointer = pictoPointer
        // keep !

        return stickedAlbum
    }

    that.constructKnot = function (pictoSelector) {
        let stickedAlbum = that
        // keep
        let pictoKnot = stickedAlbum.ctx.querySelector(pictoSelector)
        // keep !

        dictKnot[pictoSelector] = {
            knot: pictoKnot,
            pictos: {}
        }
        // keep !

        return stickedAlbum
    }

    that.knotFrom = function (pictoSelector) {
        let stickedAlbum = that
        // keep
        if(dictKnot[`.${pictoSelector}`]) {
            // keep
        } else {
            return /* keep */
        }
        // keep
        chosenKnot = `.${pictoSelector}`
        // keep
        return stickedAlbum
    }

    that.fromStatementAtFront = function (selector) {
        // keep
        return document.querySelector('.statement-at-front').querySelector(selector)
    }

    // keep
    let stickedAlbum = that
    stickedAlbum.ctx = that.fromStatementAtFront('.from-sticked-album')

    stickedAlbum.constructKnot('.put-up-bottom-statement')
    // keep !

    stickedAlbum.constructKnot('.into-bottom-knot-from-pointer')
    stickedAlbum.constructKnot('.into-knot')
    stickedAlbum.constructKnot('.from-pointer-belongings')
    stickedAlbum.constructKnot('.from-bottom-statement')

    // keep !
}

function KnotLocateFromBottomStatement() {
    let that = this
    // keep

    that.compute = function () {

    }
}

function EchoLocatorAtKnotLocate() {
    let that = this

    // knotFromBottomStatementAtTopLeft
    // knotFromBottomStatementAtBottomLeft
    // knotFromBottomStatementAtBottomRight
    // knotFromBottomStatementAtRightTop
    //
    // knotAtProfile
    //
    // knotAtFront
    // knotFromBottomStatement
    //
    // use knotLocate
    let stickedAlbum
    that.useStickedAlbum = function (stickedAlbumInstance) {
        stickedAlbum = stickedAlbumInstance
    }

    let knotRelativeSize
    that.useRelativeSize = function (knot) {
        knotRelativeSize = knot
    }

    let pointerBelongings
    that.usePointerBelongings = function (pointerBelongingsInstance) {
        pointerBelongings = pointerBelongingsInstance
    }

    that.traverseInteractionToKnotAtProfile = function (knotConnectedToProfile) {
        // use knotRelativeSize
        let knot = knotConnectedToProfile

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToProfile.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToProfile.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }


    that.traverseInteractionToKnotAtFront = function (knotConnectedToFront) {
        let knot = knotConnectedToFront

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knot.throughPointerBelongingsAtTopLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomLeft(knot.throughPointerBelongingsAtBottomLeft, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtBottomRight(knot.throughPointerBelongingsAtBottomRight, knotConnectedToFront.throughConnectedKnot)
            .traverseFromBottomStatementAtTopRight(knot.throughPointerBelongingsAtTopRight, knotConnectedToFront.throughConnectedKnot)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            .startTraversaring()
    }
    that.traverseInteractionToKnotFromBottomStatement = function (knotConnectedToBottomStatement) {
        let knot = knotConnectedToBottomStatement

        // keep
        ;
        // keep !

        (new Traversar())
            .traverseFromBottomStatementAtTopLeft(knotRelativeSize.throughPointerBelongingsAtTopLeft, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtBottomLeft(knotRelativeSize.throughPointerBelongingsAtBottomLeft, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtBottomRight(knotRelativeSize.throughPointerBelongingsAtBottomRight, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .traverseFromBottomStatementAtRightTop(knotRelativeSize.throughPointerBelongingsAtRightTop, /* keep */ knotConnectedToBottomStatement /* keep .throughConnectedKnot */)
            .useKnotRelativeSize(knotRelativeSize)
            .throughPointerBelongingsAtKnotRelativeSize(pointerBelongings)
            // keep
            .useStickedAlbum(stickedAlbum)
            // keep
            .startTraversaring()
    }

    // do you want to take fish and use pointerBelongings? knot above
    // vik ! release pointerBelongings
    that.connectTo = function (knot) {
        // keep !
        // that.traverseInteractionToKnotAtProfile(knot.throughKnotConnectedToProfile)

        // that.traverseInteractionToKnotAtFront(knot.throughKnotConnectedToFront)
        that.traverseInteractionToKnotFromBottomStatement(knot.throughKnotConnectedToBottomStatement)

        // keep !
    }

}

function KnotAtProfileStatement() {
    let that = this

    // follow KnotFromBottomStatement

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

// we knot have an ability to use static
function KnotPointerBelongingsFromBottomStatement() {
    let that = this

    // keep
    let constructedPointerBelongings
    // keep !

    // compute
    that.getPointerBelongingsFromFrontStatement = function () {
        let knotPointerBelongingsFromBottomStatement = that
        // keep !
        let pointerBelongingsFromFront = {}
        pointerBelongingsFromFront.pointerBelongings = {
            pointerBelongingsAtTopLeft: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontTopLeft,
            pointerBelongingsAtBottomLeft: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomLeft,
            pointerBelongingsAtBottomRight: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontBottomRight,
            pointerBelongingsAtRightTop: knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement.pointerBelongingsAtFrontRightTop
        }
        // from-bottom

        return pointerBelongingsFromFront
    }

    that.throughSpawnedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromBottomStatement = that
        // keep !
        that.spawnedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromBottomStatement
    }

    that.throughConstructedPointerBelongings = function (pointerBelongings) {
        let knotPointerBelongingsFromBottomStatement = that

        constructedPointerBelongings = pointerBelongings

        return knotPointerBelongingsFromBottomStatement
    }
    let passThrough = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThrough']

    that.passThrough = passThrough

    that.computeFromFront = function () {
        let knotPointerBelongingsFromBottomStatement = that

        knotPointerBelongingsFromBottomStatement.throughKnot = {
            fromFrontStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromBottomStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromBottomStatement.throughKnot.fromFrontStatement
    }

    that.compute = function () {
        let knotPointerBelongingsFromBottomStatement = that

        knotPointerBelongingsFromBottomStatement.throughKnot = {
            fromBottomStatement: {}
        }
        // keep !
        that.passThrough(constructedPointerBelongings, knotPointerBelongingsFromBottomStatement.throughKnot)
        // keep !

        return knotPointerBelongingsFromBottomStatement.throughKnot.fromBottomStatement
    }
    // keep !
}

function PointerBelongingsAtKnotFromBottomStatementFromComputed() {
    // follow PointerBelongingsAtKnotFromBottomStatement
    // we cannot use reference here

    let that = this

    let knotY, knotX
    that.constructCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }

    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }
    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }


    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        if(knotInstance && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),
            // that's program style
            knotAtDistanceY: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y),
            // that's human style

            knotAtBottomLeftY: knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y - that.pointerBelongings['y'],

            knotAtDistanceX: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight.x]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtFront: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomRight.x]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtDebth: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.y]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y),

            // keep !
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep !pointerBelongingsAtKnotRelativeSize)
    }
}

function PointerBelongingsAtKnotFromBottomStatement() {
    let that = this

    // keep !

    // keep
    let knotY, knotX
    that.assignCoordinates = function (y, x) {
        knotY = y
        knotX = x
    }
    let pointerBelongingsAtKnotRelativeSize
    that.useKnotRelativeSize = function (knotRelativeSize) {
        pointerBelongingsAtKnotRelativeSize = knotRelativeSize
    }

    let knotInstance
    that.useKnot = function (passedKnotInstance) {
        knotInstance = passedKnotInstance
    }
    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }


    that.compute = function () {
        // that.pointerBelongings = { y: knotY, x: knotX }
        that.pointerBelongings = {
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep

        if(knotInstance && pointerBelongingsAtKnotRelativeSize) {
            // keep !
        } else {
            return /* keep */
        }

        that.pointerBelongings = {
            throughY: (that.descendingFromTheSun([that.pointerBelongings['y'], knotY]) - that.pointerBelongings['y']),
            throughX: (that.descendingFromTheSun([that.pointerBelongings['x'], knotX]) - that.pointerBelongings['x']),
            // that's program style
            knotAtDistanceY: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft.y),
            // that's human style

            knotAtBottomLeftY: knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.y - that.pointerBelongings['y'],

            knotAtDistanceX: (that.descendingFromTheSun([knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x, knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight.x]) - knotInstance.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtFront: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomRight.x]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.x),
            knotRelativeSizeAtDebth: (that.descendingFromTheSun([pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y, pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtBottomLeft.y]) - pointerBelongingsAtKnotRelativeSize.throughPointerBelongingsAtTopLeft.y),

            // keep !
            y: 460.29801062650074, x: 29.984574863067234,
            z: 0.027998035964756942, radius: 30, d: 0.9, f: 0.4, frontRatio: 1, debthScaleRatio: 1, frontScaleRatio: 1, profileScaleRatio: 1
        }
        // keep !pointerBelongingsAtKnotRelativeSize)
    }

}

function KnotLocatePayloadComputed() {
    let that = this

    let queuePayload = []

    that.payloadFrom = function () {
        // keep
    }
    that.put = function () {
        // keep
    }

    that.compute = function () {
        // keep
    }
}

function KnotLocateStickd() {
    let that = this

    /* it uses computed style and reference to human style */
    let dictStickd = {}
    let queueStickd = []
    that.locateFrom = function (y, x) {
        // keep
        let atPointerBelongings
        let providedY = y
        let providedX = x

        for(let i = 0; i < queueStickd.length; i++) {
            /* topLeft, bottomLeft, bottomRight, rightTop */

            if(queueStickd[i][0].y <= providedY && providedX >= queueStickd[i][0].x
                && providedY <= queueStickd[i][1].y && /* keep */ providedX >= queueStickd[i][1].x
                && providedY <= queueStickd[i][2].y && providedX <= queueStickd[i][2].x
                && queueStickd[i][3].y <= providedY && providedX <= queueStickd[i][3].x
            ) {
                // keep
                let foundPointer = dictStickd[JSON.stringify([queueStickd[i][0], queueStickd[i][1], queueStickd[i][2], queueStickd[i][3]])]
                atPointerBelongings = foundPointer

                break
            }
        }
        // keep

        // we are starting-from-bottom-statement
        return atPointerBelongings /* keep */
    }

    that.put = function (pointerBelongings, knotInstanceFromComputed) {
        /* topLeft, bottomLeft, bottomRight, rightTop */
        // keep

        // we cannot use pointerBelongingsCollectionOfFour
        // it allows keep knot type safe
        let originalPointerBelongins = pointerBelongings
        let spawnedPointerBelongings = JSON.parse(JSON.stringify(pointerBelongings))

        dictStickd[JSON.stringify([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])] = knotInstanceFromComputed

        // we are starting from bottom-statement
        queueStickd.push([
            spawnedPointerBelongings.pointerBelongingsAtTopLeft, spawnedPointerBelongings.pointerBelongingsAtBottomLeft,
            spawnedPointerBelongings.pointerBelongingsAtBottomRight, spawnedPointerBelongings.pointerBelongingsAtRightTop
        ])

        console.log(queueStickd)
    }
    that.compute = function () {
        // keep
    }
}

function AccuratePencil() {
    let that = this
    let scene

    // updates-stack
    that.throughChalk = function (chalk, knotInstance) {
        knotInstance.spawnedPointerBelongings.chalk = chalk

        return knotInstance
    }

    let takeOne = function (arr) {
        return arr.splice(arr.length - 1, 1)[0]
    }

    let queueKnotFromBottomStatement = []
    that.connectKnotToBottomStatement = function (bottomStatement, knotInstance) {
        queueKnotFromBottomStatement.push(knotInstance)
    }
    that.constructKnot = function () {
        return takeOne(queueKnotFromBottomStatement)
    }
    // keep !

    let queueAccurateKnot = []
    that.useScene = function (scene) {
        scene = that
    }
    // we knot have an ability to verify TI11
    // keep accu-rate !
    that.rememberAccurateSample = function (scene, accurateKnotInstance) {
        queueAccurateKnot.push(accurateKnotInstance)
    }
    that.provideScene = function () {
        return scene
    }
    that.draw = function () {
        // knotFromCubicProject

        // keep !

        // and there. it is program way, knot human way
        for(let i = 0; i < queueAccurateKnot.length; i++) {
            // chosen scene we take to ourself
            // it is a memory protection and a protection from high coupling
            queueAccurateKnot[i]['passThrough'](queueAccurateKnot[i]['spawnedPointerBelongings'])
        }

        // pointerBelongings
    }
}

function KnotCore() {
    let that = this

    that.constructBottomStatement = function () {

    }
}

function KnotAtFrontStatement() {
    let that = this

    // follow KnotFromBottomStatement

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}
function KnotFromBottomStatement(pencil) {
    let that = this

    // keep !
    // pencil.rememberSample(that.provideKnot())
    let fromEmptySpawnedPointerBelongins = function () {
        // keep
        return null
    }

    let passThrough = function () {
        // keep !
    }

    that.passThrough = passThrough

    that.spawnedPointerBelongings = fromEmptySpawnedPointerBelongins()

    that.highlightPointerBelongings = function (highlightPointerBelongingsAtTopLeft, highlightPointerBelongingsAtBottomLeft, highlightPointerBelongingsAtBottomRight, highlightPointerBelongingsAtRightTop) {
        that.pointerBelongingsAtTopLeft = highlightPointerBelongingsAtTopLeft
        that.pointerBelongingsAtBottomLeft = highlightPointerBelongingsAtBottomLeft
        that.pointerBelongingsAtBottomRight = highlightPointerBelongingsAtBottomRight
        that.pointerBelongingsAtRightTop = highlightPointerBelongingsAtRightTop
    }

    that.throughStickedAlbum = function (stickedAlbum) {
        let knotFromBottomStatement = that
        // #sticked-album is based on heap
        // from computed we are using stack
        knotFromBottomStatement.stickedAlbum.ctx.addEventListener('click', function (event) {
            // keep
            // let atTarget = event.target

            // keep
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(4)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(2)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.put-up-bottom-statement').querySelector(':nth-child(1)').querySelector('img')) !== -1) {

            }
            // keep !

            // put-up-bottom-statement


            // keep into-bottom-knot-from-pointer
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(4)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-bottom-knot-from-pointer').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
            }
            // keep !


            // keep into-knot
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-knot').querySelector(':nth-child(6)').querySelector('img')) !== -1) {

            }

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-knot').querySelector(':nth-child(5)').querySelector('img')) !== -1) {
                // keep
            }

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-knot').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-knot').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-knot').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.into-knot').querySelector(':nth-child(1)').querySelector('img')) !== -1) {

            }
            // keep !


            // keep from-pointer-belongings
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(5)').querySelector('img')) !== -1) {

            }

            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(3)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(2)').querySelector('img')) !== -1) {

            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.from-pointer-belongings').querySelector(':nth-child(1)').querySelector('img')) !== -1) {

            }
            // keep !


            // keep from-bottom-statement
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(4)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(3)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(2)').querySelector('img')) !== -1) {
                // keep
                // \we handle separately structure and logic
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).hold()

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).release()
            }
            if([event.target].indexOf(knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').querySelector('img')) !== -1) {
                // keep
                if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).getStatus() !== 'passedThrough') {
                    knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).hold()

                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').classList.add('hold')
                    knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').style.animation = 'hold 0.5s'

                    return /* keep */
                }
                knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).release()

                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').classList.remove('hold')
                knotFromBottomStatement.stickedAlbum.ctx.querySelector('.pointer-into-bottom-statement').querySelector(':nth-child(1)').style.animation = ''

                // from-bottom-statement
            }
            // keep !

            // into-bottom-knot-from-pointer
            // into-knot
            // from-pointer-belongings
            // from-bottom-statement
        })
        // keep !

        return knotFromBottomStatement
    }

    that.throughCtx = function (ctx) {
        let knotFromBottomStatement = that

        if(knotFromBottomStatement.stickedAlbum) {
            // keep
        } else {
            return knotFromBottomStatement /* keep */
        }

        // keep
        knotFromBottomStatement.ctx.addEventListener('mouseover', function(event) {
            let providedY = event.clientY
            let providedX = event.clientX

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                pointerBelongingsAtKnot.style.top = event.clientY
                pointerBelongingsAtKnot.style.left = event.clientX

            }
        })

        let dictSpawnFromBottomStatement = {}
        // that's is program style, knot human style
        let queueSpawnFromBottomStatementComputed = []

        let knotSelected

        // knotLocate
        // knotLocateFromBottomStatement

        // stackLocator

        // let me think
        // we cannot use pencil here
        // pencilThroughComputed
        // knotFromComputed

        let dcsTar = pencil

        let accuratePencil = dcsTar.fromAccuratePencil()

        let knotLocateStickd = new KnotLocateStickd()
        let sceneSpawnPointerBelongings = new SceneSpawnPointerBelongings()

        let knotLocatePayload = new KnotLocatePayloadComputed()

        let knotCore = new KnotCore()
        let bottomStatementAtKnotLocate = knotCore.constructBottomStatement()

        // keep
        // chalk

        // from-constructed

        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(4).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(2).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('put-up-bottom-statement').at(1).addEventListener('click', function () {

        })
        // keep !
        // put-up-bottom-statement


        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(4).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(2).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-bottom-knot-from-pointer').at(1).addEventListener('click', function () {

        })
        // keep !
        // into-bottom-knot-from-pointer

        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('into-knot').at(6).addEventListener('click', function () {

        })

        knotFromBottomStatement.stickedAlbum.knotFrom('into-knot').at(5).addEventListener('click', function () {

        })

        knotFromBottomStatement.stickedAlbum.knotFrom('into-knot').at(4).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-knot').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-knot').at(2).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('into-knot').at(1).addEventListener('click', function () {

        })
        // keep !
        // into-knot


        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(5).addEventListener('click', function () {

        })

        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(4).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(2).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-pointer-belongings').at(1).addEventListener('click', function () {

        })
        // keep
        // from-pointer-belongings

        // keep
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(4).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(3).addEventListener('click', function () {

        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(2).addEventListener('click', function () {
            // keep
            // use connected knotLocate
            // dcsTar.rememberSample pointer-from-front
            // dcsTar.draw
        })
        knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).addEventListener('click', function () {
            // keep
        })
        // keep !
        // from-bottom-statement

        // keep !
        knotFromBottomStatement.ctx.addEventListener('click', function (event) {
            let providedY = event.clientY
            let providedX = event.clientX

            // traversar sends straight request
            // and receives flipped request

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            // keep hub

            // into-bottom-knot-from-pointer

            // into-knot

            // from-pointer-belongings

            if(knotFromBottomStatement.stickedAlbum.knotFrom('from-bottom-statement').at(1).getStatus() === 'passedThrough') {
                // keep
                // knotSelected = 'selectKnotLocate'

                // knotFound
                // keep

                let pointerBelongingsAtKnotLocateFromComputed = new PointerBelongingsAtKnotFromBottomStatementFromComputed()
                pointerBelongingsAtKnotLocateFromComputed.constructCoordinates(providedY, providedX)
                pointerBelongingsAtKnotLocateFromComputed.useKnotRelativeSize(that.knotRelativeSize)

                // compute from knot relative size
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !

                let pointerBelongings = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings
                // keep !

                // keep !
                let knotPointerBelongings = new KnotPointerBelongingsFromBottomStatement()

                knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
                knotPointerBelongings.compute()

                pointerBelongingsAtKnotLocateFromComputed.useKnot(knotPointerBelongings)
                pointerBelongingsAtKnotLocateFromComputed.compute()

                // keep !
                let fromY = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.y
                let fromX = pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.x

                // original knot
                let knotFound = knotLocateStickd.locateFrom(
                    // keep
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                    providedY,
                    providedX

                    // from-bottom-statement
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughY + /* keep */ fromY,
                    // pointerBelongingsAtKnotLocateFromComputed.pointerBelongings.throughX + /* keep */ fromX
                )
                // keep !

                if(knotFound) {
                    // keep
                } else {
                    return /* keep */
                }

                knotComputed = JSON.parse(JSON.stringify(knotFound))
                knotComputed.spawnedPointerBelongings = JSON.parse(JSON.stringify(knotFound.spawnedPointerBelongings))
                knotComputed.passThrough = knotFound.passThrough

                knotFromChalk = accuratePencil.throughChalk("#008b8b", knotComputed)
                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotFromChalk)

                accuratePencil.draw()
            }
            // from-bottom-statement

            // keep !

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX
            // you see, there is double save ! don't speak on phone anymore . please . !
            // use telegram !
            if(['intoKnotLocate'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from belowConnected
                // normalizedKnotBelow

                // keep
            }

            if(['intoKnotFromBottomStatement'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from connected
                // normalizedKnot

                // keep
            }

            if(['intoKnotFromProfile'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from profileConnected
                // normalizedProfileKnot

                // keep
            }

            if(['intoKnotFromFront'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from frontConnected
                // normalizedFrontKnot

                // keep
            }

            if(['connectThrough'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove from connected

                // normalizedKnot

                // keep
                // atKnotFromComputed below knotAbove

                // accuratePencil.draw()
            }


            if(['pointerFromProfile'].indexOf(knotSelected) !== -1) {
                // atPointerBelongingsFromKnotFromComputed

                let pointerBelongings = new PointerBelongingsAtKnotFromProfile()

                let pointerBelongingsFromBottomStatement = accuratePencil.atPointerBelongingsFromBottomStatement()

                pointerBelongings.fromBottomStatement(pointerBelongingsFromBottomStatement)
                pointerBelongings.assignCoordinates(providedY, providedX)

                // pass through

                accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, pointerBelongings)
                accuratePencil.useScene(sceneSpawnPointerBelongings)

                accuratePencil.draw()

                return /* keep */
            }

            if(['pointerFromFront'].indexOf(knotSelected) !== -1) {
                // atPointerBelongingsFromKnotFromComputed
            }

            // dictSpawnFromBottomStatement
            let knotFound = knotLocateStickd.locateFrom(providedY, providedX)
            knotFound && (knotSelected = 'selectKnotLocate')

            if(['selectKnotLocate'].indexOf(knotSelected) !== -1) {
                knotSelected = ''
                return /* keep */
                // keep
                // knotFromComputed below knotAbove

                // dictSpawnFromBottomStatement contains y, x

                // we cannot get payload in real world, only in computed
                // keep

                knotPayload = knotLocatePayloadComputed.payloadFrom(knotFound.id)

                accuratePencil.usePointerBelongingsFromBottomStatement(/* keep */)

                // knotComputed updated with knotPayload
                // change status for knotFromComputed
            }

            if(['spawnPointer'].indexOf(knotSelected) !== -1) {
                // atKnotFromComputed below knotAbove
                // keep
            }

            // its actually heap, but we are using programmic style with dict
            dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})] = { y: providedY, x: providedX }

            let pointerBelongingsAtKnotLocate = new PointerBelongingsAtKnotFromBottomStatement()
            pointerBelongingsAtKnotLocate.assignCoordinates(providedY, providedX)
            pointerBelongingsAtKnotLocate.useKnotRelativeSize(that.knotRelativeSize)

            // compute from knot relative size
            pointerBelongingsAtKnotLocate.compute()

            let pointerBelongings = pointerBelongingsAtKnotLocate.pointerBelongings
            // keep !
            // let me see . that is possible through pencil
            accuratePencil.connectKnotToBottomStatement(bottomStatementAtKnotLocate, new KnotPointerBelongingsFromBottomStatement())

            let knotPointerBelongings = accuratePencil.constructKnot()

            knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongings)
            knotPointerBelongings.compute()

            pointerBelongingsAtKnotLocate.useKnot(knotPointerBelongings)
            pointerBelongingsAtKnotLocate.compute()

            accuratePencil.rememberAccurateSample(sceneSpawnPointerBelongings, knotPointerBelongings.throughSpawnedPointerBelongings(pointerBelongingsAtKnotLocate.pointerBelongings))
            accuratePencil.useScene(sceneSpawnPointerBelongings)

            accuratePencil.draw()

            knotPointerBelongings.throughConstructedPointerBelongings(pointerBelongingsAtKnotLocate.pointerBelongings)
            knotPointerBelongings.computeFromFront()

            // keep !

            let pointerBelongingsFromFront = knotPointerBelongings.getPointerBelongingsFromFrontStatement()

            dictSpawnFromBottomStatement[JSON.stringify({y: providedY, x: providedX})]['pointerBelongings'] = pointerBelongingsFromFront
            // keep memory protect

            let knotPointerBelongingsFromComputed = knotPointerBelongings

            knotLocateStickd.put(pointerBelongingsFromFront.pointerBelongings, knotPointerBelongingsFromComputed)
            process.exit()

            // keep
            knotLocatePayloadComputed.put(pointerBelongingsFromFront.id, /* payload details */)
            // keep !

            // sorry, it's knot \karmic

            // keep
            accuratePencil.draw()

            return /* keep */

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX

            // keep ! rememberSpawn

            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y /* keep ! */ && providedX >= that.pointerBelongingsAtBottomLeft.x
                && providedY <= that.pointerBelongingsAtBottomRight.y && providedX <= that.pointerBelongingsAtBottomRight.x
                && that.pointerBelongingsAtRightTop.y <= providedY && providedX <= that.pointerBelongingsAtRightTop.x) {

            }

            // keep
            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y && providedX <= that.pointerBelongingsAtBottomLeft.x
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
            ) {

            }
            // keep !

            // you remember straight
            // and flipped

            // keep !

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                // stack
                // construct preview knot
                // drawLineFromBottomStatement

                // drawLineAtFrontStatement
                // drawLineAtProfileStatement

                // pencil.draw()
                // keep !
            }
            // use double save
        })

        // mouseover tooltip -> selectKnotLocateThroughClick -> useThroughClick -> connect

        // mouseover connectThrough tooltip intoKnotFromProfile
        // mouseover connectThrough toolip intoKnotFromFront

        // mouseover stabilizePointer
        // mouseover connectThrough tooltip intoKnotFromBottomStatement
        // keep ! dictSpawnFromBottomStatement, dictPointerFromFront, dictPointerFromProfile

        // keep knotFromBottomStatement

        return knotFromBottomStatement /* keep */

        // keep
        knotFromBottomStatement.ctx.addEventListener('mouseover', function(event) {
            let providedY = event.clientY
            let providedX = event.clientX

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                pointerBelongingsAtKnot.style.top = event.clientY
                pointerBelongingsAtKnot.style.left = event.clientX

            }
        })
        // keep !

        knotFromBottomStatement.ctx.addEventListener('click', function (event) {
            let providedY = event.clientY
            let providedX = event.clientX

            // traversar sends straight request
            // and receives flipped request

            let pointerBelongingsAtKnot = document.querySelector('.statement-from-bounced').querySelector('.pointer-belongings-at-knot')

            // pointerBelongingsAtKnot.style.top = providedY
            // pointerBelongingsAtKnot.style.left = providedX
            // you see, there is double save ! don't speak on phone anymore . please . !
            // use telegram !
            pointerBelongingsAtKnot.style.top = providedY
            pointerBelongingsAtKnot.style.left = providedX

            // keep ! rememberSpawn

            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y /* keep ! */ && providedX >= that.pointerBelongingsAtBottomLeft.x
                && providedY <= that.pointerBelongingsAtBottomRight.y && providedX <= that.pointerBelongingsAtBottomRight.x
                && that.pointerBelongingsAtRightTop.y <= providedY && providedX <= that.pointerBelongingsAtRightTop.x) {

            }

            // keep
            if(that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
                && providedY <= that.pointerBelongingsAtBottomLeft.y && providedX <= that.pointerBelongingsAtBottomLeft.x
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtTopLeft.y <= providedY && that.pointerBelongingsAtTopLeft.x <= providedX
            ) {

            }
            // keep !

            // you remember straight
            // and flipped

            // keep !

            if(that.pointerBelongingsAtTopLeft.y >= providedY && that.pointerBelongingsAtTopLeft.x >= providedX
                && that.pointerBelongingsAtBottomLeft.y >= providedY && that.pointerBelongingsAtBottomLeft.x >= providedX
                && that.pointerBelongingsAtBottomRight.y <= providedY && that.pointerBelongingsAtBottomRight.x <= providedX
                && that.pointerBelongingsAtRightTop.y <= providedY && that.pointerBelongingsAtRightTop.x <= providedX
            ) {
                // stack
                // construct preview knot
                // drawLineFromBottomStatement

                // drawLineAtFrontStatement
                // drawLineAtProfileStatement

                // pencil.draw()
                // keep !
            }
            // use double save
        })

        // keep knotFromBottomStatement

        return knotFromBottomStatement
    }

    that.useStickedAlbum = function (stickedAlbum) {
        let knotFromBottomStatement = that
        // keep
        knotFromBottomStatement.stickedAlbum = stickedAlbum

        return knotFromBottomStatement
    }

    that.useCtx = function (ctx) {
        let knotFromBottomStatement = that
        // keep
        that.ctx = ctx

        return knotFromBottomStatement
    }

    that.takeCapture = function () {
        let knotFromBottomStatement = that
        // keep

        // use knot relative size
        // use pointer belongings

        pencil.draw()

        return knotFromBottomStatement
    }
    that.provideKnot = function () {
        return that
    }

    that.captureFromBottomStatementAtTopLeft = function (pointerBelongingsAtTopLeft) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtTopLeft = pointerBelongingsAtTopLeft

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtBottomLeft = function (pointerBelongingsAtBottomLeft) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtBottomLeft = pointerBelongingsAtBottomLeft

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtBottomRight = function (pointerBelongingsAtBottomRight) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtBottomRight = pointerBelongingsAtBottomRight

        // keep !
        return knotFromBottomStatement
    }
    that.captureFromBottomStatementAtRightTop = function (pointerBelongingsAtRightTop) {
        let knotFromBottomStatement = that
        // keep
        that.pointerBelongingsAtRightTop = pointerBelongingsAtRightTop

        // keep !
        return knotFromBottomStatement
    }
    // keep !

    that.useRelativeSize = function (knotRelativeSizeInstance, traversar) {
        let knotFromBottomStatement = that
        // keep !

        // use knot relative size
        // use pointer belongings
        that.knotRelativeSize = knotRelativeSizeInstance

        return knotFromBottomStatement
    }

    that.useConnectedKnot = function (connectedKnot) {
        that.throughConnectedKnot = connectedKnot
    }
}

function KnotLocateFromBind() {
    let that = this

    // keep !
    // pencil.rememberSample(that.provideKnot())
    let fromEmptySpawnedPointerBelongins = function () {
        // keep
        return null
    }

    let passThrough = function () {
        // keep !
    }
    that.connectedToCanvas = {}
    that.connectedToCanvas.ctx = document.querySelector('.statement-at-front').querySelector('#scene') /* keep ! .getContext('2d') */

    that.passThrough = passThrough

    that.spawnedPointerBelongings = fromEmptySpawnedPointerBelongins()

    that.throughPointerBelongings = function (pointerBelongingsInstance) {
        that.pointerBelongings = pointerBelongingsInstance
    }

    that.assignCoordinates = function () {
        // keep
    }

    that.constructPointerBelongings = function (pointerBelongingsCollectionOfFour) {
        let that = this
        that.throughPointerBelongingsAtTopLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtTopLeft
        that.throughPointerBelongingsAtBottomLeft = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomLeft

        that.throughPointerBelongingsAtBottomRight = pointerBelongingsCollectionOfFour.pointerBelongingsAtBottomRight
        that.throughPointerBelongingsAtRightTop = pointerBelongingsCollectionOfFour.pointerBelongingsAtRightTop
    }

    that.assignKnotToKnotAtProfileStatement = function (knotAtProfileStatement) {
        that.throughKnotConnectedToProfile = knotAtProfileStatement
    }

    that.assignKnotToKnotAtFrontStatement = function (knotAtFrontStatement) {
        that.throughKnotConnectedToFront = knotAtFrontStatement
    }

    that.assignKnotToKnotFromBottomStatement = function (knotFromBottomStatement) {
        let knotLocate = that
        // keep !

        knotLocate.throughKnotConnectedToBottomStatement = knotFromBottomStatement
    }
}

function Pencil() {
    let that = this
    // follow viewported-knot-at-knot-labirint

    // keep update-stack
    let knot

    let accuratePencil = new AccuratePencil()
    // keep
    that.fromAccuratePencil = function () {
        // keep !
        return accuratePencil
    }
    // keep !

    that.passThroughCrowd = function () {
        return that
    }
    that.joinLoop = function () {
        return that
    }
    that.compact = function () {
        return that
    }

    that.drawFromBottom = function () {
        that.draw()
    }

    let knotThrough
    that.intoPointerBelongingsCollection = function () {
        let pointerBelongingsCollectionOfFour = {
            pointerBelongingsAtTopLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtTopLeft,
            pointerBelongingsAtBottomLeft: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomLeft,
            pointerBelongingsAtBottomRight: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtBottomRight,
            pointerBelongingsAtRightTop: knotThrough.throughKnot.fromBottomStatement.pointerBelongingsAtRightTop
        }

        // keep

        return pointerBelongingsCollectionOfFour
    }
    that.drawThrough = function (knotThroughInstance) {
        knotThrough = knotThroughInstance

        // keep
        // knotThroughInstance.spawnedPointerBelongings
        knotThrough.compute().constructPointerBelongingsFromBottom(knotThrough.spawnedPointerBelongings)
        // take computed pointerBelongings topLeft, bottomLeft, bottomRight, rightTop

        // keep
        return that
    }

    that.useKnot = function (knotInstance) {
        knot = knotInstance
    }

    that.useEchoLocator = function (echoLocator) {
        that.echoLocator = echoLocator
        // keep !
        that.echoLocator.usePointerBelongings(knot.pointerBelongings)
        that.echoLocator.useRelativeSize(knot)

        // keep
        that.echoLocator.connectTo(knot)
    }
    // keep !


    // keep bind-stack !

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

    // bind !
}