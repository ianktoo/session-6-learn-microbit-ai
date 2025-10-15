/**
 * This is a comment:
 * 
 * This Micro:bit code uses AI model to detect movement and perform an action.
 * 
 * The actions that we have here are:
 * 
 * 1. Clap
 * 
 * 2. Wave
 * 
 * 3. Dance
 * 
 * 4. Rest
 * 
 * 5. Unknown Event - The Micro:bit is not aware of this action. You haven't taught it.
 * 
 * Our goal is to record how many times we do a certain action.
 * 
 * We are going to save the action in variables
 */
ml.onStart(ml.event.Dance, function () {
    basic.showIcon(IconNames.No)
})
ml.onStart(ml.event.Clap, function () {
    basic.showIcon(IconNames.Cow)
})
ml.onStart(ml.event.Wave, function () {
    basic.showIcon(IconNames.Chessboard)
})
ml.onStart(ml.event.Rest, function () {
    basic.showIcon(IconNames.Square)
})
