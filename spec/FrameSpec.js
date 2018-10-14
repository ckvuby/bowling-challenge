describe('Frame Unit Test', function(){
    beforeEach(function() {
        bowlingGame = new BowlingGame();
        frame = new Frame(bowlingGame);
        frame2 = new Frame(bowlingGame);
    });
    it('expect each frame to store my score', function(){
        frame.bowl(5);
        expect(frame.currentFrame).toEqual([5]);
    })
    it('expect that both my bowl will be scored and stored in the frame', function(){
        frame.bowl(5);
        frame.bowl(3);
        expect(frame.currentFrame).toEqual([5,3]);
    })
    it('expect that I can not bowl more than twice in each frame', function(){
        frame.bowl(5);
        frame.bowl(3);
        expect(function() { frame.bowl(2) }).toThrow("This frame is finished!");
    })

    it('expect that if I bowl a strike, the current frame will end', function(){
        frame.bowl(10);
        expect(function() { frame.bowl(2) }).toThrow("This frame is finished!");
    })

    it('expect that if I bowl a strike, the current frame score will be [10,0]', function(){
        frame.bowl(10);
        expect(frame.currentFrame).toEqual([10,0]);
    })

    it('I get an extra 2 rolls if I bowl a strike in the first roll of frame 10', function(){
        bowlingGame.scoreboard = [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]];        
        console.log(frame2.roll, frame2.currentFrame);
        frame2.bowl(10);
        console.log(frame2.roll, frame2.currentFrame);
        expect(frame2.currentFrame).toEqual([10]);
        expect(frame2.roll).toEqual(2);
    })
    it('expects that I can bowl again in the 10th frame if my first roll was a 10', function(){
        bowlingGame.scoreboard = [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]];        
        console.log(frame2.roll, frame2.currentFrame);
        frame2.bowl(10);
        frame2.bowl(10);        
        console.log(frame2.roll, frame2.currentFrame);
        expect(frame2.currentFrame).toEqual([10,10]);
        expect(frame2.roll).toEqual(1);
    })
    it('expect that I can bowl 3 times in the 10th frame if my first bowl was a strike', function(){
        bowlingGame.scoreboard = [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]];        
        console.log(frame2.roll, frame2.currentFrame);
        frame2.bowl(10);
        frame2.bowl(10);  
        frame2.bowl(10);      
        console.log(frame2.roll, frame2.currentFrame);
        expect(frame2.currentFrame).toEqual([10,10,10]);
        expect(frame2.roll).toEqual(0);
        expect(bowlingGame.scoreboard).toEqual([[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1], [10,10,10]])
    })

    it('expects that if I roll a spare in the 10th frame, I get an extra roll', function(){
        bowlingGame.scoreboard = [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]];        
        console.log(frame2.roll, frame2.currentFrame);
        frame2.bowl(5);
        console.log('roll after 1st roll:',frame2.roll, frame2.currentFrame);
        frame2.bowl(5);        
        console.log('roll after 2nd roll:',frame2.roll, frame2.currentFrame);
        expect(frame2.currentFrame).toEqual([5,5]);
        expect(frame2.roll).toEqual(1);
    })

    it('expects that if I roll a spare in the 10th frame, 0 and 10, I get an extra roll', function(){
        bowlingGame.scoreboard = [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]];        
        console.log(frame2.roll, frame2.currentFrame);
        frame2.bowl(0);
        console.log('roll:',frame2.roll, frame2.currentFrame);
        frame2.bowl(10);        
        console.log('roll:',frame2.roll, frame2.currentFrame);
        expect(frame2.currentFrame).toEqual([0,10]);
        expect(frame2.roll).toEqual(1);
    })

    it('expects that if I roll a spare in the 10th frame, I get a total of 3 rolls', function(){
        bowlingGame.scoreboard = [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]];        
        console.log(frame2.roll, frame2.currentFrame);
        frame2.bowl(3);
        console.log('roll:',frame2.roll, frame2.currentFrame);
        frame2.bowl(7);        
        console.log('roll:',frame2.roll, frame2.currentFrame);
        frame2.bowl(5);   
        expect(frame2.currentFrame).toEqual([3,7,5]);
        expect(frame2.roll).toEqual(0);
        expect(frame2.currentFrame.length).toEqual(3);
    })
});
