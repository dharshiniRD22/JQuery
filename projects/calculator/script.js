$('#Add').on('click', function () {
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    var result = parseFloat(num1) + parseFloat(num2);
    $('#getresult').text(result);
});

$('#subtract').click(function () {
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    var result = parseFloat(num1) - parseFloat(num2);
    $('#getresult').text(result);
});

$('#multiply').click(function () {
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    var result = parseFloat(num1) * parseFloat(num2);
    $('#getresult').text(result);
});

$('#divide').click(function () {
    var num1 = $('#number1').val();
    var num2 = $('#number2').val();
    if (num2 == 0) {
        alert("Division by zero is not allowed");
    } else {
        var result = parseFloat(num1) / parseFloat(num2);
        $('#getresult').text(result);
    }
});

$('#reset').click(function () {
    $('#number1').val('');
    $('#number2').val('');
    $('#getresult').text('');
});
