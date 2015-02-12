var expect = chai.expect;

describe( 'MainTest', function () {

    it( 'give user points for frame', function () {

        var player = newPlayer();
        roll (1, player);
        expect( player.score ).to.equal( 0 );
        roll (2, player);
        expect( player.score ).to.equal( 3 );
    });

    var player = newPlayer();

    it( 'first strike gives 10 points', function () {
        roll (10, player);
        expect( player.score ).to.equal( 10 );
    });

    /*
    it ( 'next two rolls added to points', function () {
        expect( player.score ).to.equal( 10 );
        roll (3, player);
        roll (6, player);
        expect( player.score).to.equal(28);
        expect( player.frames[0].score).to.equal( 19 );
    });
    */

});
