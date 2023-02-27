class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.centerNumber = Math.ceil((this.min + this.max) / 2)
    }

    lower() {
        return this.max = this.centerNumber;
    }

    greater() {
        return this.min = this.centerNumber;
    }
}

module.exports = GuessingGame;
