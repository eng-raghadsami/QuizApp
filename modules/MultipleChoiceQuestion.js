export class MultipleChoiceQuestion extends Question{
    constructor(text,correctAnswer,options){
        super(text, correctAnswer);
        this.options=[...options];
    }
}