let label = $("#PhoneLabel");

$("#GetPhoneButton").on("click", getPhone);

function getPhone() {
  const apiUrl = `https://localhost:7225/RandPhoneNumb`;
  console.log(apiUrl);
  $.ajax({
    url: apiUrl,
    type: "GET",
    success: function (response) {
        $("#PhoneLabel").css("background", "rgb(173, 255, 47,0.5)");
      console.log(response);
      label.text(response);
    },
    error: function (error) {
      console.error("POST Error:", error);
      $("#PhoneLabel").css("background", "red");
    },
  });
}
