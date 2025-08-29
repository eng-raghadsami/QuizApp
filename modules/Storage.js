export class Storage {
  #key;
  constructor(key) {
    this.#key = key; 
  }
  
  saveAnswers(answers){
    localStorage.setItem(this.#key, JSON.stringify(answers));
  }

  getAnswers(){
    const savedAnswers = localStorage.getItem(this.#key);
    return savedAnswers ? JSON.parse(savedAnswers) : {};
  }

  clear(){
    localStorage.removeItem(this.#key);
  }
}