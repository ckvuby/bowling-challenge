describe('Feature Test:', function(){
    var bowlingGame;

    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame();
    });
  
    it('I can start a bowling game from scratch', function(){
      expect(bowlingGame.showScoreCard()).toEqual([]);
    });

    it('I can see my current score after my first bowl', function(){
        frame.bowl(5)
        expect(bowlingGame.showScoreCard()).toEqual([[5]]);
    });
});
