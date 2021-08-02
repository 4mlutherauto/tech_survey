# Tech Survey

## Installation 
1. Have MySQL server running
2. From Workbench, run: 
    CREATE DATABASE survey_db;
3. Clone the repo: https://github.com/4mlutherauto/tech_survey
4. npm i (install all the dependencies)
5. npm start (or node server.js to manually start and get the tables created)
6. From the browser you can now see the survey
    http://localhost:3001/
7. Click Start, or navigate to http://localhost:3001/next
8. Proceed through the survey questions/answers
9. Results Page should auto-appear upon completion of the survey, 
    you can also navigate to http://localhost:3001/resultspage
10. From Workbench, you can see the data by typing:
USE survey_db;
SELECT * FROM answers_a;
*make sure you refresh the SCHEMA window in workbench if you don't see survey_db available.