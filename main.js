
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

var ballsThrown = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var roll = 0;

function getScoreForRolls(roll1, roll2, roll3) {
    roll++;
    ballsThrown[roll] = roll1;
    roll++;
    if (roll2) {
        ballsThrown[roll] = roll2;
    }
    else
        ballsThrown[roll] = 0;
    if (roll3) {
        roll++;
        ballsThrown[roll] = roll3;
    }

    return calculateScore(ballsThrown);
}

function updateScoreUI( roll1, roll2, roll3 ) {
    var score = getScoreForRolls(roll1, roll2, roll3);

    document.getElementById("score").innerHTML = "Score=" + score;
}
