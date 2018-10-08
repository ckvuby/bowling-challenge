describe('Feature Test:', function(){

    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame(bowlingGame);
        frame2 = new Frame(bowlingGame)

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
        it ('I can see which frame I am currently playing', function(){
        frame.bowl(5)
        frame.bowl(3)
        frame2.bowl(1)
        frame2.bowl(1)
        expect(bowlingGame.activeFrame()).toEqual(3)
    });
    it ('I can see that I am currently on the 10th frame', function(){
        bowlingGame.scoreboard = [[1,1], [2,2], [3,3], [4,4], [5,5], [6,6], [7,7]]
        frame.bowl(5)
        frame.bowl(3)
        frame2.bowl(1)
        frame2.bowl(1)
        expect(bowlingGame.activeFrame()).toEqual(10)
    });
});
