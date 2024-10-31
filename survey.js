function retrieve(){
    //retrieve data from each element
    var firstname = document.getElementById("firstname");
    localStorage.setItem("firstname", firstname);
    var lastname = document.getElementById("lastname");
    localStorage.setItem("lastname", lastname);
    var email = document.getElementById("email");
    localStorage.setItem("email", email);
    var reasons = document.querySelector('input[list="browsers"]');
    localStorage.setItem("reasons", reasons);
    var school = document.getElementById("school");
    localStorage.setItem("school", school);
    var other = document.getElementById("other");
    localStorage.setItem("other", other);
    var discoveryMethod = document.querySelector('input[name="discovery"]:checked');
    localStorage.setItem("discovery", discoveryMethod);
    var suggestions = document.querySelector('textarea[name="message"]').trim();
    localStorage.setItem("suggestions", suggestions);
    
    //check multiselect box
    var helpful = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(checkbox => checkbox.id);
    localStorage.setItem("helpful", helpful);
    alert('Survey data saved successfully!');
}

function reset(){
    document.getElementById("myForm").reset;
}