describe('bowlingGame', function(){
    var bowlingGame;

    beforeEach(function() {
        bowlingGame = new BowlingGame();
    });
    it ('expects bowlingGame to start with an empty scoreboard/empty array', function() {
        expect(bowlingGame.scoreboard).not.toBeUndefined();
    });
});