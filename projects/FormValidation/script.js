$('#error-message').hide();
$('#container2').hide();
$('#container3').hide();
$('#submit').on('click', function (e) {
    e.preventDefault();
    var name = $('#name').val().trim();
    var message = $('#message').val().trim();
    var mobile = $('#mobile').val().trim();
    var gender = $("#gender").val();
    var dob = $("#dob").val();
    var age = $('#age').val().trim();
    var comments = $('#comments').val().trim();
    var sportsChecked = $("input[type='checkbox']:checked").length > 0;
    var disabilityChecked = $("input[name='disability']:checked").length > 0;

    if (name == "" || message == "" || mobile == "" ||
        gender === "" || dob === "" || age == "" || !sportsChecked ||
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
            "<p><b>Gender:</b> " + gender + "</p>"
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
    $('form')[0].reset();
    $('#container3').show();
});