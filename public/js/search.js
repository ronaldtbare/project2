$(document).ready(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    var avail = $("input[name='opt2radio']:checked").val();
    var searchSkill = $("input[name='optradio']:checked").val();
    if (searchSkill) {
      alert("Your search term is " + searchSkill);
    }
    if (avail) {
      alert("Your availability is " + avail);
    }
    $.get(`/api/skillssearch/${searchSkill}`).then(function(data) {
      for (var i = 0; i <= data.length; i++){
        $("#peopleDiv").append(`<div class="col-sm">
        <div class="card" style="width: 18rem; margin-top: 3rem;">
            <div class="card-body">
                <h5 class="card-title">${data[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">
                ${data[i].skills}
                </h6>
                <p class="card-text">Available: ${data[i].availability}</p>
                <p class="card-text">Email: ${data[i].email}</p>

            </div>
        </div>
        </div>

    </div>`);
      }
    });
  });
});
