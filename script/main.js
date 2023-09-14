const arrowsElements = document.querySelectorAll('.arrow');
const elementsAsArray = Array.from(arrowsElements);

const answerElements = document.querySelectorAll('.question-container--answear');
const answeArray = Array.from(answerElements);

const questions = document.querySelectorAll('.question-container--question');
const questionsArray = Array.from(questions);


arrowsElements.forEach((element)=>showingAnswers(element));

questions.forEach(function (element){
    element.addEventListener('click',()=>{
        const temp = answeArray[questionsArray.indexOf(element)];
        temp.classList.toggle('inactive');       
    });

});




function showingAnswers(element){
    element.addEventListener('click',()=>{
        
            
        const temp = answeArray[elementsAsArray.indexOf(element)];
        
        temp.classList.toggle('inactive');
        const tempQ = questionsArray[elementsAsArray.indexOf(element)];
        tempQ.classList.toggle('boldQuestion');
       
    });
}