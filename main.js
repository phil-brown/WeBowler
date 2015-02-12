
function calculateScore(ballsThrown) {
    var score = 0;
    
    for (index = 0; index < ballsThrown.length; index++) {
        score = score + ballsThrown[index];
    }

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


    return score;
}

/*function sayHello (customName) {
    if (customName) {
        return 'hello, ' + customName;
    }
    else
        return 'hello, world';
}
*/
