describe('Frame Unit Test', function(){
    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame(bowlingGame);
        frame2 = new Frame(bowlingGame);
    });
    it('expect each frame to store my score', function(){
        frame.bowl(5)
        expect(frame.currentFrame).toEqual([5])
    })
    it('expect that both my bowl will be scored and stored in the frame', function(){
        frame.bowl(5)
        frame.bowl(3)
        expect(frame.currentFrame).toEqual([5,3])
    })
    it('expect that I can not bowl more than twice in each frame', function(){
        frame.bowl(5)
        frame.bowl(3)
        expect(function() { frame.bowl(2) }).toThrow("You have already bowled twiced!");
    })
});
