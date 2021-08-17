
const saveEmailHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value.trim();

    if (email) {
        const response = await fetch('/api/user/', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("email stored: " + email);
            $('.group-one').hide();
            $('.group-two').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveemail')
    .addEventListener('click', saveEmailHandler);





const paysaveHandler = async (event) => {
    event.preventDefault();
    const pay = document.querySelector('#salaryanswer').value;

    if (pay) {
        console.log("the salary is " + pay)
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ pay }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("pay stored!" + response);
            $('.group-zero').hide();
            $('.group-one').show();
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
            console.log("hours stored!");
            $('.group-three').hide();
            $('.group-threehalf').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savehourans')
    .addEventListener('click', saveHoursAnsHandler);

const earningshandler = async (event) => {
    event.preventDefault();
    const earnings = document.querySelector('#earnings').value.trim();

    if (earnings) {
        console.log("weekly earnings= " + earnings)
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ earnings }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("earnings stored!");
            $('.group-threehalf').hide();
            $('.group-four').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveearnings')
    .addEventListener('click', earningshandler);

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
    benefitselectionarray = [];
    if ($('#medical').is(':checked')) {
        console.log("medical=yes");
        benefitselectionarray.push("medical");
    }
    else {
        console.log("no medical");
    }

    if ($('#lifeins').is(':checked')) {
        console.log("life ins=yes");
        benefitselectionarray.push("life-insurance");
    }
    else {
        console.log("no life ins");
    }
    if ($('#ltdis').is(':checked')) {
        console.log("disability=yes");
        benefitselectionarray.push("long-term-disability");
    }
    else {
        console.log("no disability");
    }
    if ($('#401k').is(':checked')) {
        console.log("401k=yes");
        benefitselectionarray.push("401k");
    }
    else {
        console.log("no 401k match");
    }
    if ($('#tuition').is(':checked')) {
        console.log("tuition=yes");
        benefitselectionarray.push("tuition");
    }
    else {
        console.log("no tuition");
    }
    if ($('#vacation').is(':checked')) {
        console.log("vacation=yes");
        benefitselectionarray.push("vacation");
    }
    else {
        console.log("no vacation");
    }
    if ($('#none').is(':checked')) {
        console.log("none=yes");
        benefitselectionarray.push("none");
    }
    else {
        console.log("has benefits offered");
    }


    if (benefitselectionarray.length != 0) {
        let benefitselectionobj = JSON.stringify(Object.assign([], benefitselectionarray))
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ benefitselectionobj }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("benefits:  " + benefitselectionarray);
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

    //this returns an object but the key is not a string
    //update key is a string, but so is the entire object....
    if (addtlworkarray.length != 0) {
    //  const addtlworkobj = { addtlworkarrayobj: [] }
        // addtlworkobj.addtlworkarrayobj.push(addtlworkarray);
        let stringyobj = JSON.stringify(Object.assign([], addtlworkarray));
        const response = await fetch('/api/answers/', {
            //body: stringyobj DOES NOT SAVE TO DB
            method: 'POST',
            body: JSON.stringify({ stringyobj }),
            headers: { 'Content-Type': 'application/json' },
        })
        console.log('what is this', stringyobj);
        if (response.ok) {
            console.log(addtlworkarray)
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
            body: JSON.stringify({percent}) ,
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
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

const doyoustaycurrent = async (event) => {
    event.preventDefault();
    const staycurrent = document.querySelector('input[name="staycurrent"]:checked').value;

    if (staycurrent) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ staycurrent }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("staycurrent? " + staycurrent + " stored!");
            $('.group-ten').hide();
            $('.group-tenhalf').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savestaycurrent').addEventListener('click', doyoustaycurrent);


const continueeducation = async (event) => {
    event.preventDefault();
    conteduarray = [];
    if ($('#EOM').is(':checked')) {
        console.log("EOM=yes");
        conteduarray.push("manufacturer training");
    }
    else {
        console.log("no EOM");
    }
    if ($('#tuitionbonus').is(':checked')) {
        console.log("tuitionbonus=yes");
        conteduarray.push("tuition bonus");
    }
    else {
        console.log("no tuition bonus");
    }
    if ($('#tuitionbonus').is(':checked')) {
        console.log("tuitionbonus=yes");
        conteduarray.push("tuition bonus");
    }
    else {
        console.log("no tuition bonus");
    }
    if ($('#leadership').is(':checked')) {
        console.log("leadership=yes");
        conteduarray.push("leadership training");
    }
    else {
        console.log("no leadership training");
    }
    if ($('#external').is(':checked')) {
        console.log("external=yes");
        conteduarray.push("external training");
    }
    else {
        console.log("no external training");
        conteduarray.push("No continuing education")
    }

    if (conteduarray.length != 0) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ conteduarray }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("continuing education= " + conteduarray + " stored!");
            $('.group-tenhalf').hide();
            $('.group-eleven').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savecontedu').addEventListener('click', continueeducation)

const advanceeducation = async (event) => {
    event.preventDefault();
    const adveducation = document.querySelector('input[name="adveducation"]:checked').value;

    if (adveducation) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ adveducation }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("adveducation? " + adveducation + " stored!");
            $('.group-eleven').hide();
            $('.group-twelve').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveadveducation').addEventListener('click', advanceeducation)

const noincentive = async (event) => {
    event.preventDefault();
    const noeduincentive = document.querySelector('input[name="noeduincentive"]:checked').value;

    if (noeduincentive) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ noeduincentive }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("noeduincentive? " + noeduincentive + " stored!");
            $('.group-twelve').hide();
            $('.group-twelvehalf').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savenoeduincentive').addEventListener('click', noincentive)

const stateoftheart = async (event) => {
    event.preventDefault();
    techtoolsarray = [];
    if ($('#text').is(':checked')) {
        console.log("text=yes");
        techtoolsarray.push("text");
    }
    else {
        console.log("no text");
    }

    if ($('#onlinepayment').is(':checked')) {
        console.log("onlinepayment=yes");
        techtoolsarray.push("online-payment");
    }
    else {
        console.log("no online payment");
    }
    if ($('#photovideo').is(':checked')) {
        console.log("photovideo=yes");
        techtoolsarray.push("photo-video-alerts");
    }
    else {
        console.log("no photovideo");
    }
    if ($('#empIM').is(':checked')) {
        console.log("empIM=yes");
        techtoolsarray.push("employee-instant-messaging");
    }
    else {
        console.log("no empIM");
    }

    if ($('#notechtools').is(':checked')) {
        console.log("notechtools=yes");
        techtoolsarray.push("no-tech-tools");
    }
    else {
        console.log("nonotechtools");
    }
    if (techtoolsarray.length != 0) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ techtoolsarray }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("technology tools:  " + techtoolsarray);
            $('.group-twelvehalf').hide();
            $('.group-thirteen').show();
        } else {
            alert("ERR OR")
        }
    }
}
document.querySelector('#savetechtool').addEventListener('click', stateoftheart)


const safetoolsprovided = async (event) => {
    event.preventDefault();
    const safetools = document.querySelector('input[name="safetools"]:checked').value;

    if (safetools) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ safetools }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("safetools? " + safetools + " stored!");
            $('.group-thirteen').hide();
            $('.group-fourteen').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savesafetools').addEventListener('click', safetoolsprovided)

const mechvstechtoolssprovided = async (event) => {
    event.preventDefault();
    const mechvstechtools = document.querySelector('input[name="mechvstechtools"]:checked').value;

    if (mechvstechtools) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ mechvstechtools }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // document.location.replace('/question2');
            console.log("mechvstechtools? " + mechvstechtools + " stored!");
            $('.group-fourteen').hide();
            $('.group-fifteen').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savemechvstechtools').addEventListener('click', mechvstechtoolssprovided)

const scheduleneeds = async (event) => {
    event.preventDefault();
    const schedneed = document.querySelector('input[name="schedneed"]:checked').value;

    if (schedneed) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ schedneed }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("schedneed? " + schedneed + " stored!");
            $('.group-fifteen').hide();
            $('.group-sixteen').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveschedneed').addEventListener('click', scheduleneeds)


const advopportunity = async (event) => {
    event.preventDefault();
    const advopp = document.querySelector('input[name="advopp"]:checked').value;

    if (advopp) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ advopp }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("advopp? " + advopp + " stored!");
            $('.group-sixteen').hide();
            $('.group-seventeen').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveadvopp').addEventListener('click', advopportunity)


const equalproductivity = async (event) => {
    event.preventDefault();
    const equalprod = document.querySelector('input[name="equalprod"]:checked').value;

    if (equalprod) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ equalprod }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("equalprod? " + equalprod + " stored!");
            $('.group-seventeen').hide();
            $('.group-eighteen').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveequalprod').addEventListener('click', equalproductivity)


const showrespect = async (event) => {
    event.preventDefault();
    const respect = document.querySelector('input[name="respect"]:checked').value;

    if (respect) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ respect }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("respect? " + respect + " stored!");
            $('.group-eighteen').hide();
            $('.group-nineteen').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saverespect').addEventListener('click', showrespect)

const undervalueskill = async (event) => {
    event.preventDefault();
    const undervalue = document.querySelector('input[name="undervalue"]:checked').value;

    if (undervalue) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ undervalue }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("undervalue? " + undervalue + " stored!");
            $('.group-nineteen').hide();
            $('.group-twenty').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#saveundervalue').addEventListener('click', undervalueskill)


const mechnottech = async (event) => {
    event.preventDefault();
    const mechvstech = document.querySelector('input[name="mechvstech"]:checked').value;

    if (mechvstech) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ mechvstech }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("mechvstech? " + mechvstech + " stored!");
            $('.group-twenty').hide();
            $('.group-twentyone').show();
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savemechvstech').addEventListener('click', mechnottech)

const worklifebalance = async (event) => {
    event.preventDefault();
    const balance = document.querySelector('input[name="balance"]:checked').value;

    if (balance) {
        const response = await fetch('/api/answers/', {
            method: 'POST',
            body: JSON.stringify({ balance }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            console.log("balance? " + balance + " stored!");
            $('.group-twentyone').hide();
            document.location.replace('/resultspage');
        } else {
            alert("ERR OR")
        }
    }
}
document
    .querySelector('#savebalance').addEventListener('click', worklifebalance)