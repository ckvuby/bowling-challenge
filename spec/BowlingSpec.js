describe('bowlingGame', function(){
    var bowlingGame;

    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame(bowlingGame);
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
    it ('I get extra points for scoring a strike in a frame', function(){
        bowlingGame.scoreboard = [[10,0], [1,1]]
        expect(bowlingGame.getScore()).toEqual(14)
    });

    it('I get extra points for scoring a strike in multiple frames', function(){
        bowlingGame.scoreboard = [[10,0], [10,0], [5,0]]
        expect(bowlingGame.getScore()).toEqual(45)
    });
    it('If I get a strike, my scoreboard is not updated until appropriate rolls have been made', function(){
        bowlingGame.scoreboard = [[10,0]]
        expect(bowlingGame.getScore()).toEqual(10)
    });
    it('I get extra points for scoring a strike in a single frame when the next 2 bowls have been made', function(){
        bowlingGame.scoreboard = [[10,0], [5,0]]
        expect(bowlingGame.getScore()).toEqual(20)
    });
    it('If I get 2 strikes, my scoreboard is not updated until appropriate rolls have been made', function(){
        bowlingGame.scoreboard = [[10,0], [10,0]]
        expect(bowlingGame.getScore()).toEqual(20)
    });
    
    it('The scoreboard is updated appropriately for bowling a spare', function(){
        bowlingGame.scoreboard = [[5,5], [5,3]]
        expect(bowlingGame.spareUpdate()).toEqual([[10,5], [5,3]])
    });

    it('Extra points are awarded for bowling a spare after appropriate bowls have been made', function(){
        bowlingGame.scoreboard = [[5,5], [5,3]]
        expect(bowlingGame.getScore()).toEqual(23)
    });
    it('Extra points are awarded for bowling a spare even if my spare frame follows [0,10]', function(){
        bowlingGame.scoreboard = [[0,10], [5,3]]
        expect(bowlingGame.getScore()).toEqual(23)
    });
    it('Correct score is given for bowling a mix game of spares and open frames', function(){
        bowlingGame.scoreboard = [[0,10], [3,6], [3,7], [8,1]]
        expect(bowlingGame.getScore()).toEqual(49)
    });
    it('Correct score is given for bowling a mix game of strikes and spares and open frames', function(){
        bowlingGame.scoreboard = [[0,10], [3,6], [3,7], [8,1], [10,0], [10,0], [2,6]]
        expect(bowlingGame.getScore()).toEqual(97)
    });
    it('Correct score is given for bowling a mix game of strikes, spares, gutter bowls and open frames', function(){
        bowlingGame.scoreboard = [[0,10], [3,6], [3,7], [8,1], [10,0], [10,0], [2,6], [0,0]]
        expect(bowlingGame.getScore()).toEqual(97)
    });
    
    it('Correct score is given for completing a mix game of strikes, spares, and open frames, spare in 10th frame', function(){
        bowlingGame.scoreboard = [[10,0], [10,0], [5,0], [3,5], [10,0], [6,2], [5,5], [6,3], [3,3], [5,5,3]]
        expect(bowlingGame.getScore()).toEqual(123)
    });

    it('Correct score is given for completing a mix game of strikes, spares, and open frames, strike in 10th frame', function(){
        bowlingGame.scoreboard = [[10,0], [10,0], [5,0], [3,5], [10,0], [6,2], [5,5], [6,3], [3,3], [10,10,10]]
        expect(bowlingGame.getScore()).toEqual(140)
    });

    it('Correct score is given for completing a mix game of strikes, spares, and open frames, strike in 9th frame, strike in 10th frame', function(){
        bowlingGame.scoreboard = [[10,0], [10,0], [5,0], [3,5], [10,0], [6,2], [5,5], [6,3], [10,0], [10,10,10]]
        expect(bowlingGame.getScore()).toEqual(164)
    });
});
