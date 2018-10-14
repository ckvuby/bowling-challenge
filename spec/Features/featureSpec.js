describe('Feature Test:', function(){

    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame(bowlingGame);
        frame2 = new Frame(bowlingGame);
        frame3 = new Frame(bowlingGame);
        frame4 = new Frame(bowlingGame);
        frame5 = new Frame(bowlingGame);
        frame6 = new Frame(bowlingGame);
        frame7 = new Frame(bowlingGame);
        frame8 = new Frame(bowlingGame);
        frame9 = new Frame(bowlingGame);
        frame10 = new Frame(bowlingGame);
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

        //     As a player,
        // so I know how many frames I have already played,
        // I want to see which frame I’m currently playing

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

    //     As a player,
    // to be rewarded for my skill,
    // I want to be credited extra scores when I bowl a strike

    it('I get extra points for scoring a strike in a frame', function(){
        frame.bowl(10) // 12
        frame2.bowl(1)
        frame2.bowl(1)
        expect(bowlingGame.getScore()).toEqual(14)
    });

    it('I get extra points for scoring a strike in multiple frames', function(){
        frame.bowl(10) // 25
        frame2.bowl(10) // 15
        frame3.bowl(5) // 5
        frame3.bowl(0)
        expect(bowlingGame.getScore()).toEqual(45)
    });

    it('I get the correct score for having a mix game of strikes and open frames i.e 3 and 5 pins knocked down in a frame', function(){
        frame.bowl(10) // 25
        frame2.bowl(10) // 15
        frame3.bowl(5) 
        frame3.bowl(0) // 5
        frame4.bowl(3) 
        frame4.bowl(5) // 8
        frame5.bowl(10) // 18
        frame6.bowl(6)  
        frame6.bowl(2)  // 8 
        expect(bowlingGame.getScore()).toEqual(79)
    });

    it('I get the correct score for playing a whole game with mix of strike, spares and open frames, spare in 10th frame', function(){
        frame.bowl(10) // 25
        frame2.bowl(10) // 15
        frame3.bowl(5) 
        frame3.bowl(0) // 5
        frame4.bowl(3) 
        frame4.bowl(5) // 8
        frame5.bowl(10) // 18
        frame6.bowl(6)  
        frame6.bowl(2)  // 8 
        frame7.bowl(5)  
        frame7.bowl(5)  // 16
        frame8.bowl(6)  
        frame8.bowl(3)  // 9
        frame9.bowl(3)
        frame9.bowl(3)  // 6
        frame10.bowl(5)
        frame10.bowl(5)
        frame10.bowl(3) // 13
        expect(bowlingGame.getScore()).toEqual(123)
    });

    it('I get the correct score for playing a whole game with mix of strike, spares and open frames, strike in 10th frame', function(){
        frame.bowl(10) // 25
        frame2.bowl(10) // 15
        frame3.bowl(5) 
        frame3.bowl(0) // 5
        frame4.bowl(3) 
        frame4.bowl(5) // 8
        frame5.bowl(10) // 18
        frame6.bowl(6)  
        frame6.bowl(2)  // 8 
        frame7.bowl(5)  
        frame7.bowl(5)  // 16
        frame8.bowl(6)  
        frame8.bowl(3)  // 9
        frame9.bowl(3)
        frame9.bowl(3)  // 6
        frame10.bowl(10)
        frame10.bowl(10)
        frame10.bowl(10) // 30
        expect(bowlingGame.getScore()).toEqual(140)
    });

    it('I get the correct score for playing a whole game with mix of strike, spares and open frames, strike in 9th frame,strike in 10th frame', function(){
        frame.bowl(10) // 25
        frame2.bowl(10) // 15
        frame3.bowl(5) 
        frame3.bowl(0) // 5
        frame4.bowl(3) 
        frame4.bowl(5) // 8
        frame5.bowl(10) // 18
        frame6.bowl(6)  
        frame6.bowl(2)  // 8 
        frame7.bowl(5)  
        frame7.bowl(5)  // 16
        frame8.bowl(6)  
        frame8.bowl(3)  // 9
        frame9.bowl(10) // 30
        frame10.bowl(10)
        frame10.bowl(10)
        frame10.bowl(10) // 30
        expect(bowlingGame.getScore()).toEqual(164)
    });

    it('I get the correct score for playing a whole game with mix of strike, spares and open frames, strike in 9th frame, spare and strike in 10th frame', function(){
        frame.bowl(10) // 25
        frame2.bowl(10) // 15
        frame3.bowl(5) 
        frame3.bowl(0) // 5
        frame4.bowl(3) 
        frame4.bowl(5) // 8
        frame5.bowl(10) // 18
        frame6.bowl(6)  
        frame6.bowl(2)  // 8 
        frame7.bowl(5)  
        frame7.bowl(5)  // 16
        frame8.bowl(6)  
        frame8.bowl(3)  // 9
        frame9.bowl(10) // 30
        frame10.bowl(5)
        frame10.bowl(5)
        frame10.bowl(10) // 30
        expect(bowlingGame.getScore()).toEqual(144)
    });
});
