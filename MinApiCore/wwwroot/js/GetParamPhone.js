let label = $("#PhoneLabel")
let inp = $("#StartsInp");

$("GetPhoneButton").click(getPhone);


function getPhone() {
    const apiUrl = `https://localhost:7225/ParamPhoneNumb?start=`+=inp;
    $.ajax({
        type: "Get",
        url: apiUrl,
        success: function (response) {
            label.value = response;
            console.log(error);
        },
        error: function (error) {
            console.log(error);
        },
    });
}