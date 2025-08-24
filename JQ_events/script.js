// $('#btn1').click(function(){
//     alert("button clicked!");
// });

// $('#btn1').on('click', function(){
//     alert('button clicked !');
// });

// $('#btn1').on('click', function(){
//     $('.para1').hide();
// })

// $('#btn2').on('click', function(){
//     $('.para1').show();
// })

// $('#btn1').on('click', function(){
//     $('.para1').toggle();
// })

// $('#btn1').dblclick(function(){
//     $('.para1').toggle();
// })

// $('#btn1').hover(function(){
//     $('.para1').toggle();
// })

// $('#btn2').on('click', function(){
//     $('para1').show();
// })

// $('#btn1').on('mouseenter', function(){
//     $('.para1').toggle();
// })

// $('#btn1').on('mouseleave', function(){
//     $('.para1').toggle();
// })

// $('#btn1').on('mousemove', function(){
//     $('para1').toggle();
// })

// $('#btn1').on('mouseleave', function(){
//     $('.para1').toggle();
// })

// $('#btn1').on('mousedown', function(){
//     $('.para1').toggle();
// })

// $('#btn2').on('mouseup', function(){
//     $('.para1').toggle();
// })

// $('#btn1').click(function(e){
//     // console.log(e);
//     // alert(e.currentTarget.id);
//     // alert(e.currentTarget.innerHTML);
//     // alert(e.currentTarget.outerHTML);
//     alert(e.currentTarget.className);
// })

// $('#btn1').on('mousemove', function(e){
//     console.log('coords:Y' + e.clientY + 'X:' + e.clientX);
// })

// $(document).on('mousemove', function(e){
//     $('#coords').html('Coords:y:'+e.clientY + "x:" + e.clientX)
// })

// $('input').focus(function(){
//     // alert('focus');
//     $('input#name').css('background-color', 'pink');
// })

// $('input').focus(function(){
//     $(this).css('background-color', 'skyblue');
// })

// $('input').blur(function(){
//     $(this).css('background', 'grey');
// })

// $('input').keyup(function(){
//     console.log('keyup');
// });

// $('input').keyup(function(e){
//     console.log(e.target.value);
// })

// $('input#gender').change(function(e){
//     alert(e.target.value);
    
// })

$('#form').submit(function(e){
    e.preventDefault();
    console.log('submitted');
    var name = $('input#name').val();
})