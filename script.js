import { MultipleChoiceQuestion } from './modules/MultipleChoiceQuestion.js';
import { TrueOrFalseQuestion } from './modules/TrueOrFalseQuestion.js';
import { Quiz } from './modules/Quiz.js';
import { Storage } from "./modules/Storage.js";


const quizForm = document.getElementById("quizForm");
const submit = document.getElementById("submit-btn");
const clear = document.getElementById("clear-btn");
window.onload = function () {
  loading();
};

const q1= new MultipleChoiceQuestion("كم العمولة وصلت اليوم بغزة؟","35%",["20%","35%","60%","40%"]);
const q2= new MultipleChoiceQuestion("كم بلغ  عدد الشهداء منذ بداية الحرب على غزة؟"," ما يقارب ال 60000",[" ما يقارب ال 60000","مايقارب ال 20000","مايقارب ال 40000","ما يقارب ال 80000"]);
const q3= new MultipleChoiceQuestion(" ما هي الأكلة التي أنقذت الشعب الغزاوي؟","الفلافل",["الرز","اللحمة","الفلافل","الفاصولياء"]);
const q4= new MultipleChoiceQuestion("مين مرتاح بغزة؟","الحرامي",["الموظف","المتعلم","المواطن","الحرامي"]);
const q5= new MultipleChoiceQuestion("كم سعر كيلو المانجا بغزة؟","200",["100 شيكل","60 شيكل","200 شيكل","150 شيكل"]);
const q6= new TrueOrFalseQuestion("لا ينام جائع في غزة","خطأ");
const q7= new TrueOrFalseQuestion("لا ينام مظلوم في غزة","خطأ");
const q8= new TrueOrFalseQuestion("تم تطبيق جملة 'حاميها حراميها ' في غزة","صح");
const q9= new TrueOrFalseQuestion("أسعار الأجارات في غزة في متناول الجميع","خطأ");
const q10= new TrueOrFalseQuestion("غياب التعليم عن أطفال غزة لم يؤثر على عقولهم و مدى تفكيرهم","خطأ");
const quiz = new Quiz();
quiz.addQuestion(q1);
quiz.addQuestion(q2);
quiz.addQuestion(q3);
quiz.addQuestion(q4);
quiz.addQuestion(q5);
quiz.addQuestion(q6);
quiz.addQuestion(q7);
quiz.addQuestion(q8);
quiz.addQuestion(q9);
quiz.addQuestion(q10);

let userAnswers = new Array(quiz.questions.length).fill(null);
const storage = new Storage("userAnswers");
// const questions = new Quiz("questions");

function rendering(quiz) {
  const questions = document.getElementById('questions'); 
  questions.classList.add('question-div');

  quiz.questions.forEach((question, index) => {
    const questionText = document.createElement('p');
    questionText.classList.add('question-text');
    questionText.textContent = question.text;
    questions.appendChild(questionText);
    question.options.forEach(option => {
      const label = document.createElement("label");
      label.classList.add('options');

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${index}`;
      input.value = option;

      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questions.appendChild(label);
    });
  });

}


rendering(quiz);

const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => { 
  radio.addEventListener('change', (e) => { 
    const questionIndex = parseInt(e.target.name.split('-')[1]);
    userAnswers[questionIndex] = e.target.value;
updateLocalStorage();
   });

 });

function loading() {
let savedAnswers = storage.getAnswers() || [];
    userAnswers = savedAnswers;
  savedAnswers.forEach((answer, index)  => {
    
 if(answer) {
        const radio = document.querySelector(`input[name="question-${index}"][value="${answer}"]`);
        if(radio) radio.checked = true;
      }  });
      updateLocalStorage();

}
clear.addEventListener('click', (e) => {
  e.preventDefault();
  storage.clear();
  userAnswers = new Array(quiz.questions.length).fill(null);
    quizForm.reset();
});
submit.addEventListener('click', (e) => {
  e.preventDefault();
   for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === null) {
            alert(`You have to answer all questions. Missing question: ${i + 1}`);
            return; 
        }
        
    }
userAnswers.forEach((answer, index) => {

    quiz.submit(index, answer);
  });
 
  alert(`Your score is: ${quiz.getScore()}/${quiz.questions.length}`);

  storage.clear();
  userAnswers = new Array(quiz.questions.length).fill(null);
  quizForm.reset();
});
function updateLocalStorage() {
  storage.saveAnswers(userAnswers);
}
