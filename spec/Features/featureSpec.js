describe('Feature Test:', function(){
    var bowlingGame;

    beforeEach(function() {
        bowlingGame = new BowlingGame();
    });
  
    it('I can start a bowling game from scratch', function(){
      expect(bowlingGame.scoreboard()).toEqual([]);
    });
  });