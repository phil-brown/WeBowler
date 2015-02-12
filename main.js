function roll ( points, player ) {
    var index = player.frameIndex;
    var currentFrame = player.frames[index];
    currentFrame.score += points;
    if (index > 0) {
        var previousFrame = player.frames[index-1];
        if (previousFrame.rolls[0] == 10) {
            previousFrame.score += points;
        }
    }
    if (currentFrame.rollIndex == 1 || points == 10) {
        player.score += currentFrame.score;
        nextFrame(player);
    }
    else {
        currentFrame.rollIndex ++;
    }

    //if (currentFrame.rollIndex == 0) {
    //    if (points == 10) {
    //        //Strike
    //        player.score += 10;
    //
    //    }
    //}
    //
    //
    //
    //
    //if (points == 10) {
    //    var frameScore = currentFrame.score;
    //    player.score += frameScore;
    //    if (index > 0) {
    //        currentFrame.score = currentFrame.score - player.frames[index-1].score;
    //        player.frames[index-1].score += frameScore;
    //        currentFrame.score = currentFrame.score + player.frames[index-1].score;
    //        player.score = currentFrame.score;
    //    }
    //    nextFrame(player);
    //}
    //else

}

function newPlayer() {
    return {
        score: 0,
        frameIndex: 0,
        frames: newFrames()
    };
}

function newFrames() {
    return [
        newFrame(), newFrame(), newFrame(), newFrame(), newFrame(), newFrame(), newFrame(), newFrame(), newFrame(), newFrame()
    ]
}

function newFrame() {
    return {
        rolls: [0,0,0],
        rollIndex: 0,
        score: 0
    }
}

function nextFrame( player ) {
    player.frameIndex++;
}