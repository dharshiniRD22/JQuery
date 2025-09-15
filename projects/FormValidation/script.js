$('#error-message').hide();
$('#container2').hide();
$('#container3').hide();
$('#submit').on('click', function (e) {
    e.preventDefault();
    var name = $('#name').val().trim();
    var message = $('#message').val().trim();
    var mobile = $('#mobile').val().trim();
    var genderChecked = $("input[name='gender']:checked").length > 0;
    var dob = $("#dob").val();
    var age = $('#age').val().trim();
    var comments = $('#comments').val().trim();
    var sportsChecked = $("input[type='checkbox']:checked").length > 0;
    var disabilityChecked = $("input[name='disability']:checked").length > 0;

    if (name == "" || message == "" || mobile == "" ||
        !genderChecked || dob === "" || age == "" || !sportsChecked ||
        !disabilityChecked || comments == "") {
        $('#error-message').show();
        return;
    }
    else {
        $('#error-message').hide();
        $('#container2').show();
        $('#container').hide();
        $("#result").html(
            "<p><b>Name:</b> " + name + "</p>" +
            "<p><b>Address:</b> " + message + "</p>"
            +
            "<p><b>Mobile:</b> " + mobile + "</p>"
            +
            "<p><b>Gender:</b> " + $("input[name='gender']:checked").val() + "</p>"
            +
            "<p><b>Date of Birth:</b> " + dob + "</p>"
            +
            "<p><b>Age:</b> " + age + "</p>"
            +
            "<p><b>Sports:</b> " + $("input[type='checkbox']:checked").map(function () {
                return $(this).val();
            }).get().join(", ") + "</p>"
            +
            "<p><b>Disability:</b> " + $("input[name='disability']:checked").val() + "</p>"

            +
            "<p><b>Comments:</b> " + comments + "</p>"
        );
    }
})

$('#edit').on('click', function () {
    $('#container2').hide();
    $('#container').show();
});

$('#confirm').on('click', function () {
    $('#container2').hide();
    $('#container3').show();
});

$(document).ready(function () {
    $("#dob").on("change", function () {
        var dob = new Date($(this).val());
        if (!isNaN(dob.getTime())) {
            var today = new Date();
            var age = today.getFullYear() - dob.getFullYear();
            var monthDiff = today.getMonth() - dob.getMonth();
            var dayDiff = today.getDate() - dob.getDate();
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }
            $("#age").val(age);
        } 
    });
});
