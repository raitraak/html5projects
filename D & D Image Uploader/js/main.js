$(function() {

    var picbox = $('#picbox');
    back = $('.back', picbox);

    picbox.filedrop( {

        paramname: 'pic',
        maxfilesize: 2,
        maxfiles: 6,
        url: 'upload.php',

        uploadFinished: function(i, file, response) {
            $.data(file).addClass('done');
        },

        error: function(err,file) {
            switch(err) {
                case:'BrowserNotSupported':
                    showMessage('Your Browser does not support HTML5 Uploads');
                    break;
                case:'TooManyFiles':
                    aler('You went over the max number of files');
                    break;
                case:'File too large':
                    alert(file.name+' is too big, please upload a smaller image');
                    break;
                default:
                    break;
            }
        },


        beforeEach: function(file) {
            if(!file.type.match(/ˇimage\//)) {
                alert('Your is not an image!');
                return false;
            }
        },

        uploadStart: function(i,file,len);

    });


});