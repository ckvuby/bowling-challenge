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
    it ('tells the user which frame they are currently playing', function(){
        bowlingGame.scoreboard = [[5,3],[1,1]]
        expect(bowlingGame.activeFrame()).toEqual(3)
    });
    it ('I can see that I am currently on the 10th frame', function(){
        spyOn(bowlingGame, 'showScoreCard').and.returnValue([[1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7], [8,8], [9,9]])
        expect(bowlingGame.activeFrame()).toEqual(10)
    });
});
