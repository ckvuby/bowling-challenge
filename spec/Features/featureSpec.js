describe('Feature Test:', function(){
    var bowlingGame;

    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame(bowlingGame);
    });
  
    it('I can start a bowling game from scratch', function(){
      expect(bowlingGame.showScoreCard()).toEqual([]);
    });

    it('I can see my current scoreboard after completing a frame', function(){
        frame.bowl(5)
        frame.bowl(3)
        expect(bowlingGame.showScoreCard()).toEqual([[5,3]]);
    });

    it('So that I can see my current score', function(){
        frame.bowl(5)
        frame.bowl(3)
        expect(bowlingGame.getScore()).toEqual(8)
    });
});
