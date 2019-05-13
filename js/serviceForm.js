$(document).ready(function() {
  console.log("I am Here");

  var getService = function(e) {
    e.preventDefault();
    console.log("running postService");
    var newService = {
      name: $("#activityName").val(),
      date: $("#date").val(),
      description: $("#description").val()
    };
    console.log(newService);
  };

  $("#formSubmit").on("click", getService);
});
