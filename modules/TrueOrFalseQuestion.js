export class TrueOrFalseQuestion {
    constructor(text,correctAnswer){
        this.text=text;
        this.correctAnswer=correctAnswer;
        this.options=["صح","خطأ"];
    }
    isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}