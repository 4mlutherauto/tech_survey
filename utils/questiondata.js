const questiondata = [{
   "question": "What is your skill level?",
   "answers": [
       "entry", "general", "certified"
   ],
    "name": "skill",
    "order": 1
},
{
    "question": "How do you rank amongst your auto tech peers?",
    "answers": [
        "Top 10%", "Top 25%", "Top 50%"
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

// for loop helper to loop over answers? or within handlebars use #each answers. do answers need their own ID instead of question name? 
// 

module.exports = questiondata;