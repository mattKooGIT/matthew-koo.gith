function retrieve(){

    //retrieve information
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var email = document.getElementById('email').value;
    var reason = document.querySelector('input[list="browsers"]').value;
    var school = document.getElementById('school').value;
    var otherSchool = document.getElementById('other').value;
    var discoveryMethod = document.querySelector('input[name="discovery"]:checked')?.value;
    var suggestions = document.querySelector('textarea[name="message"]').value;
    console.log("awef");
    //create an object to hold all of the survey data
    var surveyData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        reason: reason,
        school: school,
        otherSchool: otherSchool,
        discoveryMethod: discoveryMethod,
        sectionsInterested: sections,
        suggestions: suggestions
    };

    // store the data in local storage
    localStorage.setItem('surveyData', JSON.stringify(surveyData));

    alert('Survey data saved successfully!');
}

function reset(){
    document.getElementById("myForm").reset;
}