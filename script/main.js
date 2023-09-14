const arrowsElements = document.querySelectorAll('.arrow');
const elementsAsArray = Array.from(arrowsElements);

const answerElements = document.querySelectorAll('.question-container--answear');
const answeArray = Array.from(answerElements);

const questions = document.querySelectorAll('.question-container--question');
const questionsArray = Array.from(questions);
console.log(typeof arrowsElements);
let lastPress;
arrowsElements.forEach(function (element){
    element.addEventListener('click',()=>{
        
            
        const temp = answeArray[elementsAsArray.indexOf(element)];
        
        temp.classList.toggle('inactive');
        const tempQ = questionsArray[elementsAsArray.indexOf(element)];
        tempQ.classList.toggle('boldQuestion');
       
    });
});
console.log(arrowsElements);

function showingAnswers(0);