function Frame(game) {
    this.currentFrame = []
    this.roll = 2
    this.game = game
}

Frame.prototype.bowl =  function(number) {
    var int = parseInt(number, 10);
    switch (this.roll) {
        case 1:
            this.currentFrame.push(int);
            this.roll -= 1;
            this.game.scoreboard.push(this.currentFrame)
            break;
        case 2:
            this.currentFrame.push(int);
            this.roll -= 1;
            break;
        case 0:
            throw "You have already bowled twiced!";
    }
    
};
