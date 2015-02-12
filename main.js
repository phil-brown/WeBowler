
function calculateScore(ballsThrown) {
    var score = 0;
    
    for (index = 0; index < ballsThrown.length; index++) {
        score = score + ballsThrown[index];
    }
    console.log("Initial score: " + score);

    for (var i = 0; i < ballsThrown.length - 3; i += 2) {
        if (ballsThrown[i] == 10 && ballsThrown[i + 2] == 10)
            score = score + ballsThrown[i + 2] + ballsThrown[i + 4]
        else if (ballsThrown[i] == 10)
            score = score + ballsThrown[i + 2] + ballsThrown[i + 3];
        else if (ballsThrown[i] + ballsThrown[i + 1] == 10)
            score = score + ballsThrown[i + 2];
    }
    //score = score + ballsThrown[18] + ballsThrown[19] + ballsThrown[20];

    console.log("Bonus score: " + score);
    /*
    if (ballsThrown[0] == 10 && ballsThrown[2] == 10)
        score = score + ballsThrown[2] + ballsThrown[4]
    else if (ballsThrown[0] == 10)
            score = score + ballsThrown[2] + ballsThrown[3];    
    else if (ballsThrown[0] + ballsThrown[1] == 10)
        score = score + ballsThrown[2];

    if (ballsThrown[2] == 10)
        score = score + ballsThrown[4] + ballsThrown[5];
    else if (ballsThrown[2] + ballsThrown[3] == 10)
        score = score + ballsThrown[4];
        */

    return score;
}
