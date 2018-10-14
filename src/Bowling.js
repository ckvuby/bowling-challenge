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
    this.spareUpdate();
    this.scoreboard = [].concat.apply([], this.scoreboard);
    this.strikeUpdate();
    console.log(this.showScoreCard())
    return this.showScoreCard().reduce(getSum);
};

BowlingGame.prototype.activeFrame = function(){
    if (this.showScoreCard().length === 10) {
        return this.showScoreCard().length
    } 
    else {
        return this.showScoreCard().length + 1
    }
};

BowlingGame.prototype.strikeUpdate = function() {
    var temp_scoreb = this.scoreboard
    temp_scoreb.forEach(function(element, index, temp_scoreb) {
        if (element === 10 && temp_scoreb[index+1] === 0 && temp_scoreb[index+2] !== undefined) {
            if (temp_scoreb[index+2] === 10 && temp_scoreb[index+4] !== undefined) {
                element = element + temp_scoreb[index+2] + temp_scoreb[index+4]
                temp_scoreb[index] = element
              }
              else if (temp_scoreb[index+2] !== 10) {
                element = element + temp_scoreb[index+2] + temp_scoreb[index+3]
                temp_scoreb[index] = element
            };
        };
    });
    return temp_scoreb
};

BowlingGame.prototype.spareUpdate = function() {
    var temp_scoreb = this.scoreboard
    temp_scoreb.forEach(function(element, index, temp_scoreb){
        if (element[0] !== 10 && element[0] + element[1] === 10 && temp_scoreb[index+1] !== undefined) {
            spare_bonus = element[0] + temp_scoreb[index+1][0]
            element[0] = spare_bonus
          }
    });
    return temp_scoreb
};

