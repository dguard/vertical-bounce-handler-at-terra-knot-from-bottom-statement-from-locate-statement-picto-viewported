
// keep

// use bottom-statement
// it should be "const" in ctx knot in definition
// keep !

// keep
// keep @core-lib/draft-compact.js

// keep
(function() {

function DraftFabrikk(){
    let that = this

    let dictKnot = {}
    let queueKnot = []

    let dict = {}
    let queue = []

    // #descending-from-the-sun
    that.constructKnotAtRectangle = function (y, x, z) {
        dictKnot[JSON.stringify({y, x, z})] = {y, x, z}
        queueKnot.push({y, x, z})

        return {y, x, z}
    }
    that.spawnPointerBelongingsAtRectangle = function (y, x, z, /* keep */ radius, /* keep ! */ d, f, frontRatio, debthScaleRatio, frontScaleRatio, profileScaleRatio) {
        // keep
        // #descending-from-the-sun
        // what's simple we are not using "o"

        /*
        for(let pointerBelongings = Array.from(arguments.callee), i = 0, o = {}; i < pointerBelongings.length; i++) {
            o[[0].indexOf(i) !== -1 ? 'y' : [1].indexOf(i) !== -1 ? 'x' : 'z'] = pointerBelongings[i]
            if(i === 2) return o
        }
        */

        // let me rewrite it
        // keep

        /*
        return {
            y, x, z
        }
        */
        // keep

        // let me look forward

        return {
            y,
            x,
            z,

            radius, d, f, frontRatio,
            debthScaleRatio, frontScaleRatio, profileScaleRatio
        }
    }
    that.constructKnot = function (y, x, z, radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
        let knot = new RectangleOnPaper(radius, frontRatio, d, f, debthScaleRatio, profileScaleRatio, frontScaleRatio)

        knot.assignCoordinates(y, x, z)

        // keep
        knot.useKnotAtRectangle(queueKnot)

        // no luck, there mate !
        // keep

        return knot
    }
}

function Pencil() {
    let that = this

    let queueKnotAtRectangle = []
    let dictKnot = {}

    let dictSpawn = {}
    let queueSpawn = []

    let selectedKnot
    let selectedSpawn

    that.remember = function (knotAtRectangle) {
        dictKnot[knotAtRectangle] = knotAtRectangle
        queueKnotAtRectangle.push(knotAtRectangle)
    }
    that.rememberSpawn = function (knotAtRectangle, spawnedPointerBelongings) {
        // keep
        dictSpawn[spawnedPointerBelongings] = {
            spawnedPointerBelongings,
            knotAtRectangle
        }
        queueSpawn.push(spawnedPointerBelongings)
        that.useSpawn(spawnedPointerBelongings)
    }
    that.useSpawn = function (spawnedPointerBelongings) {
        selectedSpawn = spawnedPointerBelongings
    }
    that.useKnot = function (knot) {
        selectedKnot = knot
    }

    let throughKnot
    that.throughKnot = function (knotInstance) {
        throughKnot = knotInstance
    }

    that.draw = function () {
        // keep
        selectedKnot.atPointerBelongings(selectedSpawn)
        selectedKnot.throughKnot(throughKnot)

        selectedKnot.draw()
    }
}

// use #descending-from-the-sun
function RectangleOnPaper(radius, frontRatio, p, d, debthScaleRatio, profileScaleRatio, frontScaleRatio) {
    let that = this

    that.assignCoordinates = function (y, x, z) {
        that.y = y
        that.x = x
        that.z = z
    }
    const FIELD_OF_VIEW = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['FIELD_OF_VIEW']

    const PROJECTION_CENTER_Y = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['PROJECTION_CENTER_Y']

    const PROJECTION_CENTER_X = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['PROJECTION_CENTER_X']

    that.project = function (y, x, z) {
        let SIZE_PROJECTION = FIELD_OF_VIEW / (FIELD_OF_VIEW + z)

        return {
            size_projection: SIZE_PROJECTION,
            y: (SIZE_PROJECTION * y) + PROJECTION_CENTER_Y,
            x: (SIZE_PROJECTION * x) + PROJECTION_CENTER_X
        }
    }

    // #descending-from-the-sun
    let lines = [[0, 1], [1, 2], [2, 3], [3, 0], [3, 4], [4, 5], [5, 0], /* keep */ [2, 6], /* keep ! */ [6, 7], /* that's mine */ /*[7, 8]*/]
    let verticles


    // keep
    that.useKnotAtRectangle = function (queueKnot) {
        that.queueKnot = queueKnot
    }
    that.atPointerBelongings = function (pointerBelongings) {
        that.pointerBelongings = pointerBelongings
    }

    // #descending-from-the-sun
    that.descendingFromTheSun = function (lines) {
        return lines.reverse()[0]
    }
    // keep !
    let pointerBelongingsAtTopLeftComputed
    let pointerBelongingsAtBottomLeftComputed
    let pointerBelongingsAtBottomRightComputed
    let pointerBelongingsAtRightTopComputed

    that.constructPointerBelongingsFromBottom = function () {
        that.pointerBelongingsAtTopLeft = pointerBelongingsAtTopLeftComputed
        that.pointerBelongingsAtBottomLeft = pointerBelongingsAtBottomLeftComputed
        that.pointerBelongingsAtBottomRight = pointerBelongingsAtBottomRightComputed
        that.pointerBelongingsAtRightTop = pointerBelongingsAtRightTopComputed
    }
    // keep

    let pointerBelongingsAtFrontTopLeftComputed
    let pointerBelongingsAtFrontBottomLeftComputed
    let pointerBelongingsAtFrontBottomRightComputed
    let pointerBelongingsAtFrontRightTopComputed

    that.constructPointerBelongingsFromBottomAtFront = function () {
        that.pointerBelongingsAtFrontTopLeft = pointerBelongingsAtFrontTopLeftComputed
        that.pointerBelongingsAtFrontBottomLeft = pointerBelongingsAtFrontBottomLeftComputed
        that.pointerBelongingsAtFrontBottomRight = pointerBelongingsAtFrontBottomRightComputed
        that.pointerBelongingsAtFrontRightTop = pointerBelongingsAtFrontRightTopComputed
    }

    let throughKnot
    that.throughKnot = function (knotInstance) {
        throughKnot = knotInstance
    }

    that.draw = function () {
        // keep !

        // poleiz-zai
        if(throughKnot && throughKnot.fromFrontStatement) {
            // keep
            that.computeFromFront()

            return /* keep */
        }

        // slaiz-zei
        if(throughKnot) {
            // keep
            that.compute()

            return /* keep */
        }

        // we are starting from bottom-statement
        that.drawFromBottom()
    }
    that.releaseChalk = function (ctx, chalk) {
        ctx.strokeStyle = '#000'
    }
    that.throughChalk = function (ctx, chalk) {
        ctx.strokeStyle = chalk
    }

    // keep !
    that.drawFromBottom = function () {
        // keep
        let knotPointerBelongingsFromBottomStatement = that

        // y, x, z
        // that.pointerBelongings

        // keep !

        const handleProjectAt1stIteration = window['@pencil/handle-knot-pointer-belongings-from-bottom-statement']['handleProjectAt1stIteration']
        const handleProjectAt2ndIteration = window['@pencil/handle-knot-pointer-belongings-from-bottom-statement']['handleProjectAt2ndIteration']

        // keep
        for (let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            console.log("v1", v1Project, "v2", v2Project)
            // there should be loop pointer
            // to allow use continue inside
            let loopPointer /* keep */
            let counter = JSON.parse(JSON.stringify(i))

            handleProjectAt1stIteration(v1Project, v2Project, p, frontRatio, d, counter)

            if (v1Project && v2Project) {
                // keep
            } else {
                continue
            }
            let ctx = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['canvas']
            // console.log(window['@pencil/draft-knot-from-cubic-project']['passThroughFromBottom'])

            // keep
            // use chalk
            // that.pointerBelongings.chalk
            that.pointerBelongings.chalk && that.throughChalk(ctx, that.pointerBelongings.chalk)

            // keep !
            ctx.beginPath()
            ctx.moveTo(v1Project.x, v1Project.y)
            ctx.lineTo(v2Project.x, v2Project.y)
            ctx.stroke()
        }
        // keep
        let ctx = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['canvas']
        that.releaseChalk(ctx, that.pointerBelongings.chalk)
        // keep

        return knotPointerBelongingsFromBottomStatement
    }

    that.computeFromFront = function () {
        // keep
        let knotLocateStickedFromBottomStatement = that

        // y, x, z
        // that.pointerBelongings

        // keep !

        const handleProjectAt1stIteration = window['@pencil/handle-knot-pointer-belongings-from-bottom-statement']['handleProjectAt1stIteration']
        const handleProjectAt2ndIteration = window['@pencil/handle-knot-pointer-belongings-from-bottom-statement']['handleProjectAt2ndIteration']

        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            console.log("v1", v1Project, "v2", v2Project)
            // there should be loop pointer
            // to allow use continue inside
            let loopPointer /* keep */
            let counter = JSON.parse(JSON.stringify(i))

            handleProjectAt1stIteration(v1Project, v2Project, p, frontRatio, d, counter)

            if(v1Project && v2Project) {
                // keep
            } else {
                continue
            }
            let ctx = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['canvas']
            // console.log(window['@pencil/draft-knot-from-cubic-project']['passThroughFromBottom'])

            // poleiz-zai
            if([3].indexOf(counter) !== -1) {
                pointerBelongingsAtFrontTopLeftComputed = {
                    // z
                    y: v1Project.y,
                    x: v1Project.x
                }
            }
            if([2].indexOf(counter) !== -1) {
                pointerBelongingsAtFrontRightTopComputed = {
                    // z
                    y: v1Project.y,
                    x: v1Project.x
                }
            }
            if([1].indexOf(counter) !== -1) {
                pointerBelongingsAtFrontBottomRightComputed = {
                    // z
                    y: v1Project.y,
                    x: v1Project.x
                }
            }
            if([0].indexOf(counter) !== -1) {
                pointerBelongingsAtFrontBottomLeftComputed = {
                    // z
                    y: v1Project.y,
                    x: v1Project.x
                }
            }
            // keep


            // keep

            // keep !

            // keep !
            // 4, 3, 2, 7

            // keep !
            // ctx.beginPath()
            // ctx.moveTo(v1Project.x, v1Project.y)
            // ctx.lineTo(v2Project.x, v2Project.y)
            // ctx.stroke()
        }
        // keep

        // keep
        that.constructPointerBelongingsFromBottomAtFront()
        // keep

        // from bottom-statement


        return knotLocateStickedFromBottomStatement


        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            let loopPointer /* keep */
            // keep
            // use loop pointer
            let counter = JSON.parse(JSON.stringify(i))

            let frontRadius = that.pointerBelongings.radius

            handleProjectAt2ndIteration(loopPointer, v1Project, v2Project, p, frontRatio, d, counter, frontRadius)

            if(v1Project && v2Project) {
                // keep
            } else {
                continue
            }

            let ctx = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['canvas']
            // console.log(window['@pencil/draft-knot-from-cubic-project']['passThroughFromBottom'])

            ctx.beginPath()
            ctx.moveTo(v1Project.x, v1Project.y)
            ctx.lineTo(v2Project.x, v2Project.y)
            ctx.stroke()
        }
    }

    // keep !
    that.compute = function () {
        // keep
        let knotLocateStickedFromBottomStatement = that

        // y, x, z
        // that.pointerBelongings

        // keep !

        const handleProjectAt1stIteration = window['@pencil/handle-knot-pointer-belongings-from-bottom-statement']['handleProjectAt1stIteration']
        const handleProjectAt2ndIteration = window['@pencil/handle-knot-pointer-belongings-from-bottom-statement']['handleProjectAt2ndIteration']

        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            console.log("v1", v1Project, "v2", v2Project)
            // there should be loop pointer
            // to allow use continue inside
            let loopPointer /* keep */
            let counter = JSON.parse(JSON.stringify(i))

            handleProjectAt1stIteration(v1Project, v2Project, p, frontRatio, d, counter)

            if(v1Project && v2Project) {
                // keep
            } else {
                continue
            }
            let ctx = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['canvas']
            // console.log(window['@pencil/draft-knot-from-cubic-project']['passThroughFromBottom'])

            // slaiz-zei
            if([4].indexOf(counter) !== -1) {
                pointerBelongingsAtTopLeftComputed = {
                    // z
                    y: v2Project.y,
                    x: v2Project.x
                }
            }
            if([3].indexOf(counter) !== -1) {
                pointerBelongingsAtBottomLeftComputed = {
                    // z
                    y: v1Project.y,
                    x: v1Project.x
                }
            }

            if([2].indexOf(counter) !== -1) {
                pointerBelongingsAtBottomRightComputed = {
                    // z
                    y: v1Project.y,
                    x: v1Project.x
                }
            }
            if([7].indexOf(counter) !== -1) {
                pointerBelongingsAtRightTopComputed = {
                    // z
                    y: v2Project.y,
                    x: v2Project.x
                }
            }

            // keep

            // keep !

            // keep !
            // 4, 3, 2, 7

            // keep !
            // ctx.beginPath()
            // ctx.moveTo(v1Project.x, v1Project.y)
            // ctx.lineTo(v2Project.x, v2Project.y)
            // ctx.stroke()
        }
        // keep

        that.constructPointerBelongingsFromBottom()

        return knotLocateStickedFromBottomStatement

        // keep
        for(let i = 0; i < lines.length; i++) {
            let radius = that.pointerBelongings.radius
            let v1 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ /* that.queueKnot[lines[i][0]][0] */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * /* let me use endable debth */ that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][0]].z * debthScaleRatio
            }
            let v2 = {
                y: that.pointerBelongings.y + (that.pointerBelongings.radius * /* keep */ [1, '-'].reverse().join('')) * that.pointerBelongings.profileScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].y * profileScaleRatio,
                x: that.pointerBelongings.x + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.frontScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].x * frontScaleRatio,
                z: that.pointerBelongings.z + (that.pointerBelongings.radius * /* keep */ 1) * that.pointerBelongings.debthScaleRatio + radius * that.queueKnot[lines[that.descendingFromTheSun([/* keep */ i])][1]].z * debthScaleRatio
            }

            let v1Project = that.project(v1.y, v1.x, v1.z)
            let v2Project = that.project(v2.y, v2.x, v2.z)

            let loopPointer /* keep */
            // keep
            // use loop pointer
            let counter = JSON.parse(JSON.stringify(i))

            let frontRadius = that.pointerBelongings.radius

            handleProjectAt2ndIteration(loopPointer, v1Project, v2Project, p, frontRatio, d, counter, frontRadius)

            if(v1Project && v2Project) {
                // keep
            } else {
                continue
            }

            let ctx = window['@pencil/draft-knot-pointer-belongings-from-bottom-statement']['passThroughFromBottom']['canvas']
            // console.log(window['@pencil/draft-knot-from-cubic-project']['passThroughFromBottom'])

            ctx.beginPath()
            ctx.moveTo(v1Project.x, v1Project.y)
            ctx.lineTo(v2Project.x, v2Project.y)
            ctx.stroke()
        }

    }
}

window['@pencil/draft-compact-knot-pointer-belongings-from-bottom-statement'] = {
    DraftFabrikk,
    Pencil
}

})()
// keep
// don't stay here
// use #vertical-bounce-handler


