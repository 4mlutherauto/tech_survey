const saveHoursHandler = async(event) => {
    event.preventDefault();
    const hourdata = document.querySelector('#hoursperweek').value.trim();

    if (hourdata) {
        console.log("the hours are " + hourdata)
        const response = await fetch('/api/hours/', {
            method: 'POST',
            body: JSON.stringify({ hourdata }),
            headers: { 'Content-Type': 'application/json'},
        }); 
        if (response.ok) {
            // document.location.replace('/next');
            // store to db
            // hide question1 show question 2
            console.log("hours stored!");
        } else {
            alert("ERR OR")
        }
        }
    }
    document
    .querySelector('#savehours')
    .addEventListener('click', saveHoursHandler);