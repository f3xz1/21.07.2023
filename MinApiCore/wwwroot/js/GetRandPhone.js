let label = $("#PhoneLabel")

getRand();


function getRand() {
    const apiUrl = `https://localhost:7225/RandPhoneNumb`;
    $.ajax({
        type: "GET",
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