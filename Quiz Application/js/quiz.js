var score = 0;
var total = 5;
var point = 1;
var highest = total * point;

//initializer

function init() {

    //correct answers
    sessionStorage.setItem('a1','b');
    sessionStorage.setItem('a2','d');
    sessionStorage.setItem('a3','c');
    sessionStorage.setItem('a4','a');
    sessionStorage.setItem('a5','b');
}


$(document).ready(function() {
    $('.questionForm').hide();

    $('#q1').show();

    $('#q1 #submit').click(function() {

        $('.questionForm').hide();
        $('#q2').fadeIn(300);
        return false;
    });

    $('#q2 #submit').click(function() {

        $('.questionForm').hide();
        $('#q3').fadeIn(300);
        return false;
    });

    $('#q3 #submit').click(function() {

        $('.questionForm').hide();
        $('#q4').fadeIn(300);
        return false;
    });

    $('#q4 #submit').click(function() {

        $('.questionForm').hide();
        $('#q5').fadeIn(300);
        return false;
    });

    $('#q5 #submit').click(function() {

        $('.questionForm').hide();
        $('#results').fadeIn(300);
        return false;
    });


});

//Add event listener

window.addEventListener('load',init,false)