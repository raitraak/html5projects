var audio = new Audio('media/Linkin Park - By Myself.mp3');

$('#pause').hide();

$('#play').click(function() {
    audio.play();
    $('#play').hide();
    $('#pause').show();
    showDuration();
});

//Pause button
$('#pause').click(function(){
    audio.pause();
    $('#play').show();
    $('#pause').hide();
});

$('#stop').click(function() {
    audio.pause();
    audio.currentTime = 0;

});
