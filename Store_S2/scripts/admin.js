var serverURL = "http://restclass.azurewebsites.net/API/";

function saveItem(){
    // get the values
    var code = $("#txtCode").val();
    var desc = $("#txtDescription").val();
    var price = $("#txtPrice").val();
    var image = $("#txtImage").val();
    var category = $("#txtCategory").val();
    var stock = $("#txtStock").val();
    var deliveryDays = $("#txtDeliveryDays").val();

    // read the values from the rest of the input fields

    console.log(code);
    console.log(description);
    console.log(price);
    console.log(image);
    console.log(category);
    console.log(stock);
    console.log(deliveryDays);

    // send the object tothe server
    $.ajax({

    });


}

    function testAjax(){

        // Async
        // Javascript
        // And
        // XML com JSON

        $.ajax({
            url: serverURL + "test",
            type: 'GET',
            success: function (res) {
                console.log("Server says", res);
            },
            error: function (err) {
                console.log("Error ocurred", err);
            }
        });
    }

function init(){
    console.log("This is Admin page!!");

    // retrieve initial data

    // hook events
    $("#btnSave").click(saveItem);
}


window.onload = init;

// Code, Description, Price, Image, Category, Stock, DeliveryDays