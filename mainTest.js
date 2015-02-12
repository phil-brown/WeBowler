var expect = chai.expect;

describe('Scoring', function () {

    it('calculate Score for Scratch game', function () {
        var ballsThrown = [1, 1, 1, 1,
                           1, 1, 1, 1,
                           1, 1, 1, 1,
                           1, 1, 1, 1,
                           1, 1, 1, 1, 0];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(20);
    });

    it('calculate Score for spare', function () {
        var ballsThrown = [0, 0, 1, 9,
                           1, 0, 0, 0,
                           0, 0, 0, 0,
                           0, 0, 0, 0,
                           0, 0, 0, 0, 0];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(12);
    });
    it('calculate Score for 2 spares', function () {
        var ballsThrown = [0, 0, 1, 9,
                          1, 9, 1, 0,
                          0, 0, 0, 0,
                          0, 0, 0, 0,
                          0, 0, 0, 0, 0];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(23);
    });
    it('calculate Score for 1 strike in Frame 1', function () {
        var ballsThrown = [10, 0, 1, 1,
                            0, 0, 0, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0, 0];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(14);
    });
    it('calculate Score for 1 strike in Frame 2', function () {
        var ballsThrown = [ 0, 0, 10, 0,
                            1, 1, 0, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0,
                            0, 0, 0, 0, 0];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(14);
    });

    it('calculate Score for 1 strike & 1 spare', function () {
        var ballsThrown = [0, 0, 4, 6, 
                           10, 0, 1, 1,
                           0, 0, 0, 0,
                           0, 0, 0, 0,
                           0, 0, 0, 0, 0];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(34);
    });
    it('calculate Score for perfect game', function () {
        var ballsThrown = [10, 0, 10, 0,
                           10, 0, 10, 0,
                           10, 0, 10, 0,
                           10, 0, 10, 0,
                           10, 0, 10, 10, 10];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(300);
    });
    /*
    it('sayHello returns default message', function () {
        var result = sayHello();
        expect(result).to.equal('hello, world');
    });

    it('sayHello returns a custom message', function () {
        var result = sayHello( 'kyle' );
        expect(result).to.equal('hello, kyle');
    });
    */


});

describe('Gameplay', function () {

    it('Scoring frame adds correctly', function () {
        var result = getScoreForRolls(3, 6);
        expect(result).to.equal(9);
    });

});
