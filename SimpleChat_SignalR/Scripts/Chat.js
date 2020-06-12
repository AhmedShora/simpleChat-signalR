/// <reference path="jquery-3.3.1.min.js" />
/// <reference path="jquery.signalr-2.4.1.min.js" />
$(function () {
    //connection to Class called ChatHub in models
    var chat = $.connection.chatHub;

    //recieve all message from all clients
    chat.client.pushMessage = function (name, message) {
        $("#discuss").append("<li><strong>" + name + "</strong> says: <p>" + message + "</p></li>")
    };

    //get username and save to hidden input text
    $("#txtName").val(prompt("Please Enter Your Name",''));

    //set focus on input textMessage
    $("#txtMessage").focus();

    //connection to hub is successfully
    $.connection.hub.start().done(function () {
        $("#btnSend").click(function () {
            var name = $("#txtName").val();
            var message = $("#txtMessage").val();
            //call SendMessage method at chat hub
            chat.server.sendMessage(name, message);
            $("#txtMessage").val('').focus();
        });
        $("#txtMessage").keyup(function (event) {
            if (event.keyCode == 13) {
                $("#btnSend").click();
            }
        });
    });

});