var audio = new Audio('media/Linkin Park - By Myself.mp3');

$('#pause').hide();

initAudio($('#playlist li:first-child'));

function initAudio(element){
    var song = element.attr('song');
    var title = element.text();
    var cover = element.attr('cover');
    var artist = element.attr('artist');

    //Create audio object
    audio = new Audio('media/'+ song);

    //Insert audio info
    $('.artist').text(artist);
    $('.title').text(title);

    //Insert song cover
    $('img.cover').attr('src','images/covers/'+cover);

    $('#playlist li').removeClass('active');
    element.addClass('active');
}

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

//Volume control
$('#volume').change(function(){
    audio.volume = parseFloat(this.value / 10);
});

//Time/Duration
function showDuration(){
    $(audio).bind('timeupdate',function(){
        //Get hours and minutes
        var s = parseInt(audio.currentTime % 60);
        var m = parseInt(audio.currentTime / 60) % 60;
        if(s < 10){
            s = '0'+s;
        }
        $('#duration').html(m + ':'+ s);
        var value = 0;
        if(audio.currentTime > 0){
            value = Math.floor((100 / audio.duration) * audio.currentTime);
        }
        $('#progress').css('width',value+'%');
    });
}
