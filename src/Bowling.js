function BowlingGame() {
    this.scoreboard = []
}

BowlingGame.prototype.showScoreCard = function() {
    return this.scoreboard
};

BowlingGame.prototype.getScore = function() {
    function getSum(total, num) {
        return total + num;
    }
    this.scoreboard = [].concat.apply([], this.scoreboard);
    return this.scoreboard.reduce(getSum);
};

BowlingGame.prototype.activeFrame = function(){
    if (this.showScoreCard().length === 10) {
        return this.showScoreCard().length
    } 
    else {
    return this.showScoreCard().length + 1
    }
}

