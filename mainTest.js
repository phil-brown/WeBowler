var expect = chai.expect;

describe('MainTest', function () {

    it('calculate Score for Scratch game', function () {
        var ballsThrown = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(20);
    });

    it('calculate Score for spare in Frame 1', function () {
        var ballsThrown = [7, 3, 4, 2];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(20);
    });

    it('calculate Score for spare not in Frame 1', function () {
        var ballsThrown = [3, 5, 3, 7, 4, 1];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(27);
    });
    it('calculate Score for 2 spares', function () {
        var ballsThrown = [3, 7, 3, 7, 4, 1];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(32);
    });
    it('calculate Score for 1 strike in Frame 1', function () {
        var ballsThrown = [10, 0, 3, 6];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(28);
    });
    it('calculate Score for 1 strike in Frame 2', function () {
        var ballsThrown = [5, 4, 10, 0, 3, 6];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(37);
    });
    it('calculate Score for 1 strike in Frame 2 & 1 spare in frame 1', function () {
        var ballsThrown = [5, 5, 10, 0, 3, 6];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(48);
    });
    it('calculate Score for 1 strike in Frame 2 & 1 strike in frame 1', function () {
        var ballsThrown = [10, 0, 10, 0, 3, 6];
        var result = calculateScore(ballsThrown);
        expect(result).to.equal(51);
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
