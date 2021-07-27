

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
            $('.group-five').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveRank').addEventListener('click', saveRankHandler);

const fairsalary = async (event) => {
    event.preventDefault();
    const fairsalary = document.querySelector('input[name="fairsalary"]:checked').value;

    if (fairsalary) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ fairsalary }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("fair salary? " + fairsalary + "stored!");
            $('.group-five').hide();
            $('.group-six').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savefairsalary').addEventListener('click', fairsalary);

const savebenefits = async (event) => {
    event.preventDefault();
    benefitselection = [];
    if ($('#medical').is(':checked')) {
        console.log("medical=yes");
        benefitselection.push("medical");
    }
    else {
        console.log("no medical");
    }

    if ($('#lifeins').is(':checked')) {
        console.log("life ins=yes");
        benefitselection.push("life-insurance");
    }
    else {
        console.log("no life ins");
    }
    if ($('#ltdis').is(':checked')) {
        console.log("disability=yes");
        benefitselection.push("long-term-disability");
    }
    else {
        console.log("no disability");
    }
    if ($('#401k').is(':checked')) {
        console.log("401k=yes");
        benefitselection.push("401k");
    }
    else {
        console.log("no 401k match");
    }
    if ($('#tuition').is(':checked')) {
        console.log("tuition=yes");
        benefitselection.push("tuition");
    }
    else {
        console.log("no tuition");
    }
    if ($('#vacation').is(':checked')) {
        console.log("vacation=yes");
        benefitselection.push("vacation");
    }
    else {
        console.log("no vacation");
    }
    if ($('#none').is(':checked')) {
        console.log("none=yes");
        benefitselection.push("none");
    }
    else {
        console.log("has benefits offered");
    }


    if (benefitselection.length != 0) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ savebenefits }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("benefits:  " + benefitselection);
            $('.group-six').hide();
            $('.group-seven').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savebenefits').addEventListener('click', savebenefits);


const employapp = async (event) => {
    event.preventDefault();
    const emplappreciation = document.querySelector('input[name="emplappreciation"]:checked').value;

    if (emplappreciation) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ emplappreciation }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("appreciate employee? " + emplappreciation + " stored!");
            $('.group-seven').hide();
            $('.group-eight').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveemployapp').addEventListener('click', employapp);

const additionalwork = async (event) => {
    event.preventDefault();
    addtlworkarray = [];
    if ($('#estimates').is(':checked')) {
        console.log("estimates=yes");
        addtlworkarray.push("estimates");
    }
    else {
        console.log("no estimates");
    }

    if ($('#collectparts').is(':checked')) {
        console.log("collectparts=yes");
        addtlworkarray.push("collect-parts");
    }
    else {
        console.log("no collect parts");
    }
    if ($('#communicatecust').is(':checked')) {
        console.log("communicatecust=yes");
        addtlworkarray.push("communicate-to-customers");
    }
    else {
        console.log("no communication");
    }
    if ($('#clean').is(':checked')) {
        console.log("clean=yes");
        addtlworkarray.push("clean");
    }
    else {
        console.log("no cleaning");
    }
    if ($('#quotes').is(':checked')) {
        console.log("quotes=yes");
        addtlworkarray.push("prepare-quotes");
    }
    else {
        console.log("no quotes");
    }
    if ($('#noaddtlwork').is(':checked')) {
        console.log("noaddtlwork=yes");
        addtlworkarray.push("no-additional-work");
    }
    else {
        console.log("no addtl work");
    }
    if (addtlworkarray.length != 0) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ addtlworkarray }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("additional work:  " + addtlworkarray);
            $('.group-eight').hide();
            $('.group-nine').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveaddtlwork').addEventListener('click', additionalwork);

    const percentworking = async (event) => {
        event.preventDefault();
        const percent = document.querySelector('input[name="percent"]:checked').value;
    
        if (percent) {
            const response = await fetch('/api/answers/', {
                method: 'POST',
                body: JSON.stringify({ percent }),
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                // document.location.replace('/question2');
                console.log("% of day: " + percent + " stored!");
                $('.group-nine').hide();
                $('.group-ten').show();
            } else {
                alert("ERR OR")
            }
        }
    }
    document
        .querySelector('#savepercent').addEventListener('click', percentworking);

        const percentworking = async (event) => {
            event.preventDefault();
            const percent = document.querySelector('input[name="percent"]:checked').value;
        
            if (percent) {
                const response = await fetch('/api/answers/', {
                    method: 'POST',
                    body: JSON.stringify({ percent }),
                    headers: { 'Content-Type': 'application/json' },
                });
                if (response.ok) {
                    // document.location.replace('/question2');
                    console.log("% of day: " + percent + " stored!");
                    $('.group-nine').hide();
                    $('.group-ten').show();
                } else {
                    alert("ERR OR")
                }
            }
        }
        document
            .querySelector('#savepercent').addEventListener('click', percentworking);