function Frame(game) {
    this.currentFrame = []
    this.roll = 2
    this.game = game
}

Frame.prototype.bowl =  function(number) {
    var int = parseInt(number, 10);
    
    switch (this.roll) {
        case 1:
            console.log('************* CASE 1', this.game.activeFrame() === 10 && this.currentFrame[0] !== 10 && this.currentFrame[0] + int === 10)
            if (this.game.activeFrame() === 10 && this.currentFrame[0] !== 10 && this.currentFrame[0] + int === 10) {
                console.log('************* CASE 1 - if', this.roll)
                this.currentFrame.push(int);
                break;
            }
            else {
                console.log('************* CASE 1 - else')
                this.currentFrame.push(int);
                this.roll -= 1;
                this.game.scoreboard.push(this.currentFrame)
                break;
            }
        case 2:
            console.log('************** CASE 2:', this.game.activeFrame() === 10, int == 10, this.currentFrame[0] === undefined);            
            if (this.game.activeFrame() === 10 && int === 10 && this.currentFrame[0] === undefined) {
                this.twoExtraRoll(int);
                break;
            }  
            else if (this.game.activeFrame() === 10 && this.currentFrame[0] != undefined) { //this else if is needed to allow a 2nd and 3rd roll of 10 in the 10th frame instead of the default behavior when bowling a 10
                console.log('hi i am in case 2 on the 10th frame, first else if', this.game.activeFrame() === 10 && this.currentFrame[0] != undefined)
                this.currentFrame.push(int);
                this.roll -= 1;
            break;
            }
            else if (int === 10) {
                this.currentFrame.push(int);
                this.currentFrame.push(0);
                this.roll -= 2;
                this.game.scoreboard.push(this.currentFrame)
            break;
            }
            else {
                console.log('ELSE')
                this.currentFrame.push(int);
                this.roll -= 1;
            break;
            }
        case 0:
            throw "This frame is finished!";
    }
    
};

Frame.prototype.twoExtraRoll =  function(int) {
    console.log('EXTRA 2 ROLLS')
    this.currentFrame.push(int);
}

