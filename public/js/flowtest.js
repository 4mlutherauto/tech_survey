let questiontext = document.querySelector('#questiontext');
let startbutton = document.querySelector('#start');
let nextbutton = document.querySelector('#next');
let form = document.querySelector('#survey');


$(nextbutton).hide();
questionNumber = 1;

const questiondata = [{
    "question": "What is your skill level?",
    "type": "radio",
    "answers": [
        "Entry Level", "General Tech", "Certified Tech"
    ],
    "values": [
        "entry", "general", "certified"
    ],
     "name": "skill",
     "order": 1
 },
 {
     "question": "How do you rank amongst your auto tech peers?",
     "type": "radio",
     "answers": [
         "Top 10%", "Top 25%", "Top 50%"
     ],
     "values": [
        10, 25, 50
    ],
     "name": "ranking",
     "order": 2
 },
 {
     "question": "I feel I am fairly compensated for my work?",
     "answers": [
         "Yes", "No"
     ],
     "name": "fairsalary",
     "order": 3
 }
 ]

const loopArray = () => {
for (let i =0; i < questiondata.length; i++) {
    const questions = questiondata[i].question;
    const questionType = questiondata[i].type;
    const questionName = questiondata[i].name;
    const questionAnswers =questiondata[i].answers;
    const questionValues =questiondata[i].values;
    const questionOrder = questiondata[i].order;
    console.log("the questions are..", questions);

    if (questionOrder ===1) {

    let answerEl = document.createElement("input");
    answerEl.setAttribute("type", questionType);
    answerEl.setAttribute("name", questionName);
    answerEl.classList.add('input-group');

    answerEl.setAttribute("id", questionAnswers)
    answerEl.value = questionValues;
    form.appendChild(answerEl);
   
    const label = document.createElement('label');
    label.innerHTML = questionAnswers;
    label.setAttribute("for", answerEl.id);
    form.appendChild(label);
    console.log(questionAnswers);
    $(nextbutton).show();
}




    // console.log(arrayIndex);
// let question1 = arrayIndex.question;
// let questionType= arrayIndex.type;
// let questionName= arrayIndex.name;
// let questionAnswers = arrayIndex.answers;
// let questionValues = arrayIndex.values;
// questiontext.innerHTML = question1;
// console.log(question1);
// console.log(questionType);
// console.log(questionAnswers);
}
}

const startHandler = async (event) => {
    event.preventDefault();
    
    $(startbutton).hide();
    loopArray();
}

document
    .querySelector('#start').addEventListener('click', startHandler);

const createRadio= () => {
    
        // for (let i=0; i < questionAnswers.length; i++) {
        // const newButton = document.createElement('button');
        // newButton.innerHTML = questionAnswers[i];
        // console.log(newButton);
        // form.appendChild(newButton);questionAnswers[i]
        let answerEl = document.createElement("input");
        answerEl.setAttribute("type", questionType);
        answerEl.setAttribute("name", questionName);
        answerEl.classList.add('input-group');
        answerEl.setAttribute("id", questionAnswers[i])
        answerEl.value = questionValues[i];
        form.appendChild(answerEl);
        const label = document.createElement('label');
        label.innerHTML = questionAnswers[i];
        label.setAttribute("for", answerEl.id);
        form.appendChild(label);
        console.log(questionAnswers[i]);
        $(nextbutton).show();
        }
// }

function questionCounter() {
    for (let i=0; i < questionAnswers.length; i++) {
        if (questionAnswers[i].order === 2) {
            console.log("second question");
        }
        else if (questionAnswers[i].order === 3) {
            console.log("third question");
        }
    }
}

function nextQuestion() {
//     const newQuestionsArray = questionsArray.map(function increment(number) {
//         return number + 1;
// }
}
