export class TrueOrFalseQuestion extends Question{
    constructor(text,correctAnswer){
        super(text, correctAnswer);
        this.options=["True","False"];
    }
}