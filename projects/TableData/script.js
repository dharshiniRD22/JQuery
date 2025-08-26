

 $('#tamile').hide();
 $('#englishe').hide();
 $('#sciencee').hide();
 $('#mathse').hide();
 $('#sociale').hide();

 $('#tamilp').hide();
 $('#tamilf').hide();

 $('#englishp').hide();
 $('#englishf').hide();

 $('#sciencep').hide();
 $('#sciencef').hide();

 $('#mathsp').hide();
 $('#mathsf').hide();

 $('#socialp').hide();
 $('#socialf').hide();

 $('#pp').hide();
 $('#pf').hide();

// $('#submit').on('click', function () {
//     if ($('#name').val() === '' || $('#reg').val() === '' || 
//     $('#class').val() === '' || $('#sec').val() === '') {
//         alert("Please fill all fields")
//     }
//     var tamil = $('#tamil').val();
//     var english = $('#english').val();
//     var science = $('#science').val();
//     var maths = $('#maths').val();
//     var social = $('#social').val();

//     var total = parseInt(tamil) + parseInt(english) + parseInt(science)
//         + parseInt(maths) + parseInt(social);
//     $('#Total').text(total);
//     $('#average').text(total / 5 +"%");
//     if(total / 5 < 35){
//         $('#average').css("color", "red");
//     } else {
//         $('#average').css("color", "green");
//     }
// })

$('#tamil,#english,#science,#maths,#social').on('keyup', function () {
     var tamil = parseInt($('#tamil').val()) ;
    var english = parseInt($('#english').val()) ;
    var science = parseInt($('#science').val()) ;
    var maths = parseInt($('#maths').val()) ;
    var social = parseInt($('#social').val()) ;

    var total = tamil +english+science + maths + social;
    var average = (total / 5);

    $('#Total').text(total);
    $('#average').text(average + "%");

    if(tamil<35 || english<35 || science<35 || maths<35 || social<35){
        $('#Total').css("color", "red");
        $('#average').css("color", "red");
        $('#pf').show();
        $('#pp').hide();
    }
    else if( average < 35){
        $('#Total').css("color", "red");
        $('#average').css("color", "red");
        $('#pf').show();
        $('#pp').hide();
    }
    else{
        $('#Total').css("color", "green");
        $('#average').css("color", "green");
        $('#pp').show();
        $('#pf').hide();
    }
})




$('#tamil').on('keyup', function () {
    if ($('#tamil').val() > 100) {
        $('#tamile').show();
        $('#tamilp').hide();
         $('#tamilf').hide(); 
    }
    else if($('#tamil').val() >=35 && $('#tamil').val() <=100){
        $('#tamilp').show();
        $('#tamilf').hide();
        $('#tamile').hide();
    }
    else{
        $('#tamilf').show();
        $('#tamilp').hide();
         $('#tamile').hide(); 
    }
})



$('#english').on('keyup', function () {
     if ($('#english').val() > 100) {
        $('#englishe').show();
        $('#englishp').hide();
         $('#englishf').hide(); 
    }
    else if($('#english').val() >=35 && $('#english').val() <=100){
        $('#englishp').show();
        $('#englishf').hide();
        $('#englishe').hide();
    }
    else{
        $('#englishf').show();
        $('#englishp').hide();
        $('#englishe').hide();
    }
})

$('#science').on('keyup', function () {
     if ($('#science').val() > 100) {
        $('#sciencee').show();
        $('#sciencep').hide();
         $('#sciencef').hide(); 
    }
    else if($('#science').val() >=35 && $('#science').val() <=100){
        $('#sciencep').show();
        $('#sciencef').hide();
        $('#sciencee').hide();
    }
    else{
        $('#sciencef').show();
        $('#sciencep').hide();
         $('#sciencee').hide(); 
    }
})

$('#maths').on('keyup', function () {
     if ($('#maths').val() > 100) {
        $('#mathse').show();
        $('#mathsp').hide();
         $('#mathsf').hide(); 
    }
    else if($('#maths').val() >=35 && $('#maths').val() <=100){
        $('#mathsp').show();
        $('#mathsf').hide();
        $('#mathse').hide();
    }
    else{
        $('#mathsf').show();
        $('#mathsp').hide();
         $('#mathse').hide(); 
    }
})
$('#social').on('keyup', function () {
     if ($('#social').val() > 100) {
        $('#sociale').show();
        $('#socialp').hide();
         $('#socialf').hide(); 
    }
    else if($('#social').val() >=35 && $('#social').val() <=100){
        $('#socialp').show();
        $('#socialf').hide();
        $('#sociale').hide();
    }
    else{
        $('#socialf').show();
        $('#socialp').hide();
         $('#sociale').hide(); 
    }
})

