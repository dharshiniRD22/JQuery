
$('#stateRow').hide();
$('#districtRow').hide();
$('#cityRow').hide();
$('#zipRow').hide();
$('#error').hide();

$('#country').on('keyup', function() {
     $('#stateRow').show();
     $('#error').hide();
})

$('#state').on('keyup', function() {
     $('#districtRow').show();
     $('#error').hide();
})

$('#district').on('keyup', function() {
     $('#cityRow').show();
     $('#error').hide();
})

$('#city').on('keyup', function() {
     $('#zipRow').show();
     $('#error').hide();
})
$('#zip').on('keyup', function() {
     $('#error').hide();
})

$('#submit').on('click', function(e){
    e.preventDefault();
    if ($('#country').val() === '' || $('#state').val() === '' || $('#district').val() === '' 
    || $('#city').val() === '' || $('#zip').val() === '') 
        {
        $('#error').show();
    } else {
        $('#error').hide();
        alert(" your entered details are saved !")
    }
})

