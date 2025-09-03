export class MultipleChoiceQuestion {
    constructor(text,correctAnswer,options){
        this.text=text;
        this.correctAnswer=correctAnswer;
        this.options=[...options];
    }
     isCorrect(answer) {
        return answer === this.correctAnswer;
    }
}