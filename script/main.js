const arrowsElements = document.querySelectorAll('.arrow');
const elementsAsArray = Array.from(arrowsElements);

const answerElements = document.querySelectorAll('.question-container--answear');
const answeArray = Array.from(answerElements);

const questions = document.querySelectorAll('.question-container--question');
const questionsArray = Array.from(questions);


arrowsElements.forEach((element)=>showingAnswers(element));

questions.forEach(function (element){
    element.addEventListener('click',()=>{
        
        elementsAsArray[questionsArray.indexOf(element)].classList.toggle('arrowReverse');

        const temp = answeArray[questionsArray.indexOf(element)];
        temp.classList.toggle('inactive');       

        const tempQ = questionsArray[questionsArray.indexOf(element)];
        tempQ.classList.toggle('boldQuestion');
        
    });

});


/**arrowReverse */

function showingAnswers(element){
    element.addEventListener('click',()=>{
        
        element.classList.toggle('arrowReverse');

        const temp = answeArray[elementsAsArray.indexOf(element)];
        
        temp.classList.toggle('inactive');
        const tempQ = questionsArray[elementsAsArray.indexOf(element)];
        tempQ.classList.toggle('boldQuestion');

        let currentPos = elementsAsArray.indexOf(element);
        console.log(currentPos);
        switch(currentPos){
            case 1:
                let a1 = document.querySelector('a1');
                a1.classList.add('inactive');
                console.log(a1);
                break;
        }
    });
}


/** */

let elementsAnsObject = [
    
        ,
        document.querySelector('a2'),
        document.querySelector('a3'),
        document.querySelector('a4'),
        document.querySelector('a5')
    
];

