$(document).ready(function() {
    //Define vars

    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var w = canvas.width();
    var h = canvas.height();
    var cw = 15;
    var d = 'right';
    var food;
    var score;
    var speed = 130;

    //Snake Array

    var snake_array;

    function init() {

        create_snake();
        create_food();
        score = 0;

        if(typeof) game_loop !='undefined') clearInterval(game_loop);
        game_loop = setInterval(paint, speed);


    }

    init();

    function create_snake() {
        var lenght = 5;
        snake_array = [];

        for(var i = lenght-1;1i)


});