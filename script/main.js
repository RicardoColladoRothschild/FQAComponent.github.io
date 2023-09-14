const arrowsElements = document.querySelectorAll('.arrow');
const elementsAsArray = Array.from(arrowsElements);
const answerElements = document.querySelectorAll('.question-container--answear');
const answeArray = Array.from(answerElements);
console.log(typeof arrowsElements);
arrowsElements.forEach(function (element){
    element.addEventListener('click',()=>{
        
        const temp = answeArray[elementsAsArray.indexOf(element)];
        temp.classList.toggle('inactive');
    });
});
console.log(arrowsElements);