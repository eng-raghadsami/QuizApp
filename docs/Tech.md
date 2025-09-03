# 📝 Quiz App Technical requirements

The app is a form with 10 questions and each one has three options that the user can answer through the form and get his score.

## Folder Structure

- `index.html` - the main structure of the app (entry point)
- `style.css` - the css style of the app
- `script.js` - the logic added to the app
- `Quiz.js` - the container class in the app
- `MultipleChoiceQuestion.js` - the first type of questions in the app
- `TrueFalseQuestion.js` - the second type of questions in the app
- `Storage.js` - handle saving and retrieving answers from localStorage

## Requirements

1. A form with 10 questions:

   - The form consists of:
     - **question text** displayed inside a `<p>` element
     - **choices** represented as multiple `<input type="radio">` (one for each option)
   - The form has basic validation of the browser and additional validation with js:
     - The user must choose one choice for each question
     - The user must answer all questions
     - prevent form submission if validation fails

2. Handle form submit:

   - Capture answers
   - display user score
   - clear the form after submitting

3. The `send` button should initiate the submit event
4. There should be an event listener on `Enter` button that submits also the form
5. When loading/reloading the page during the quiz the answers should be saved
6. After the quiz is submitted, if the page is reloaded, the form should start empty (no saved answers).
