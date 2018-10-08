describe('bowlingGame', function(){
    var bowlingGame;

    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame();
    });
    it ('expects bowlingGame to start with an empty scoreboard/empty array', function() {
        expect(bowlingGame.scoreboard).not.toBeUndefined();
    });
    it ('expects that I see my current score', function(){
        bowlingGame.scoreboard = [[5,3]]
        expect(bowlingGame.getScore()).toEqual(8)
    });
});
