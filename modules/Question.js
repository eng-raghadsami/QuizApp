class Question {
    constructor(text, correctAnswer) {
        this.text = text;
        this.correctAnswer = correctAnswer;
    }
     isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}