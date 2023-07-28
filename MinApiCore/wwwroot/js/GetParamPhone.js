let label = $("#PhoneLabel");
let inp = $("#StartsInp");

$("#GetPhoneButton").on("click", getPhone);

function getPhone() {
  const inputValue = inp.val();
  if (!inputValue) {
    console.error("Введите значение в поле ввода.");
    return;
  }

  const apiUrl = `https://localhost:7225/ParamPhoneNumb?start=` + inputValue;
  console.log(apiUrl);
  $.ajax({
    url: apiUrl,
    type: "POST",
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
