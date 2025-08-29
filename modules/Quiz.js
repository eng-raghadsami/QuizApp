class Quiz {
    constructor(){
        this.questions = [];           
        this.answers = {};            
        this.score = 0; 
    }
    addQuestion(question){
        this.questions.push(question);
    }
    reset(){
        this.answers={};
        this.score=0;

    }
    submit(index,answer){
        this.answers[index] = answer;
    }
    getScore(){
        this.score=0;
        this.questions.forEach((q,i)=>{
            if(q.isCorrect(this.answers[i])){
                this.score++;
            }
                
        });
            return this.score;
        
    }

}