

const paysaveHandler = async (event) => {
    event.preventDefault();
    const pay = document.querySelector('input[name="salaryans"]:checked').value;

    if (pay) {
        console.log("the salary is " + pay)
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ pay }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("pay stored!" + response);
            $('.group-one').hide();
            $('.group-two').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#paysave').addEventListener('click', paysaveHandler);


const saveSkillHandler = async (event) => {
    event.preventDefault();
    const skill = document.querySelector('input[name="skill"]:checked').value;

    if (skill) {
        console.log("skill level = " + skill)
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ skill }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("skill stored!");
            $('.group-two').hide();
            $('.group-three').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveSkill').addEventListener('click', saveSkillHandler);

const saveRankHandler = async (event) => {
    event.preventDefault();
    const rank = document.querySelector('input[name="rank"]:checked').value;

    if (rank) {
        console.log("rank = " + rank)
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ rank }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("rank stored!");
            $('.group-four').hide();
            // $('.group-five').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveRank').addEventListener('click', saveRankHandler);

const saveHoursAnsHandler = async (event) => {
    event.preventDefault();
    const hourans = document.querySelector('#hoursperweekans').value.trim();

    if (hourans) {
        console.log("the hours are " + hourans)
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ hourans }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/questions');
            console.log("hours stored!");
            $('.group-three').hide();
            $('.group-four').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savehourans')
    .addEventListener('click', saveHoursAnsHandler);