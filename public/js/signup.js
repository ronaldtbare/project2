$(document).ready(function() {
  //References to our form and input.
  var signUpForm = $("form.signup");
  var nameInput = $("input#name-input");
  var emailInput = $("input#email-input");
  var passwordInput = $("input#password-input");
  var skillsInput = $("select#skillsinput");
  var availabilityinput = $("select#availabilityinput");

  //When we click the signup button, we validate that the email, password and skills  are not blanck
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    var userData = {
      name: nameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      skills: skillsInput.find("option:selected").val(),
      availability: availabilityinput.find("option:selected").val()
    };

    // Wont submit the post if we are missing a email or password
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.skills === "" ||
      userData.availability === ""
    ) {
      window.alert("Please fill out all the fields");
      return;
    }

    // If we have an email,  password and skills, then, run the signUpUser fucntion.
    signUpUser(
      userData.name,
      userData.email,
      userData.password,
      userData.skills,
      userData.availability
    );
    nameInput.val("");
    emailInput.val("");
    passwordInput.val("");
    skillsInput.val("");
    availabilityinput.val("");
  });

  // Does a post to the signup route. If succesful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(name, email, password, skills, availability) {
    $.post("/api/signup", {
      name: name,
      email: email,
      password: password,
      skills: skills,
      availability: availability
    })
      .then(function() {
        window.location = "/login";
        // If there's an error, handle it by throwing up a boostrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
