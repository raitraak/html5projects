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

    $('.questionForm #submit').click(function() {
        //Get Data ATR
        var current = $(this).parents('form:first').data('question');
        var next = $(this).parents('form:first').data('question')+1;

        //Hide Q
        $('.questionForm').hide();

        //SHow Next Questions

        $('#q'+next+'').fadeIn(300);
        process(''+current+'');
        return false;


    });

});

//Process ANW

function process(n) {



    }





    if(q=='q2') {
        var submitted = $('input[name=q2]:checked').val();
        if(submitted==sessionStorage.a2) {
            score++;
        }
    }

    if(q=='q3') {
        var submitted = $('input[name=q3]:checked').val();
        if(submitted==sessionStorage.a3) {
            score++;
        }
    }

    if(q=='q4') {
        var submitted = $('input[name=q4]:checked').val();
        if(submitted==sessionStorage.a4) {
            score++;
        }
    }

    if(q=='q5') {
        var submitted = $('input[name=q5]:checked').val();
        if(submitted==sessionStorage.a5) {
            score++;
        }

        $('#results').html('<h3>Your Final Score Is: '+score+' out of 5</h3><a href="index.html">Take Quiz Again</a>');
    }
    return false;
}



//Add event listener

window.addEventListener('load',init,false)