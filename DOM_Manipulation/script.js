

// $('p.para1').css('color', 'red');

$('p.para1').css({color:'red', backgroundColor: '#ccc' });

//addind an class
$('p.para2').addClass('myclass');

//removing an class
$('p.para2').removeClass('myclass');

$('#btn1').click(function(){
    $('p.para2').toggleClass('myclass');
})

//adding text over an div
// $('#myDiv').text("hello world");
// $('#myDiv').html('<h3>hello world</h3>');
// alert($('#myDiv').text());

//adding item at last of the list
$('ul').append('<li>appended list item </li>');
//adding item at the first of the list
$('ul').prepend('<li>prepend list item </li>');

$('para1').appendTo('para2');
$('para1').prependTo('para2');

//adding text before ul
$('ul').before('<h4>hello</h4>');
//adding text after ul
$('ul').after('<h4>world</h4>');

//make ul empty or delete the ul element
// $('ul').empty();
// $('ul').detach();

// $('a').attr('target', '_blank');
// alert($('a').attr('href'));\

//make webpage to load on same page
$('a').removeAttr('target');

//Wrap

//wrap para2 and para2 seperatly on h1 tag
// $('p').wrap('<h1>');

//wrap para1 amd para2 on same h1 tag
// $('p').wrapAll('<h1>');


//adding the input on li
$('#newItem').keyup(function(e){
    var code = e.which;
    if(code == 13){
        e.preventDefault();
        $('ul').append('<li>'+ e.target.value + '</li>');
    }
})

// var myArr = ['brad', 'kelley', 'nate', 'jose'];
// $.each(myArr, function(i, val){
//     // console.log(val);
//     $('#users').append('<li>' + val + '</li>');
// })

var newArr = $('ul#list li').toArray();
// console.log(newArr);
$.each(newArr, function(i, val){
    console.log(val.innerHTML);
})