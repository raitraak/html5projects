var db = null;

if(window.openDatabase) {

    db = openDatabase('NoteTest','1.0','Stickys Database','1000000');
    if(!db) {
        alert('Failed to open database');
    }

} else {
    alert('Failed to open database, make sure your browser supports HTML5 Web storage');

}

function Note() {
    var self = this;

    var note = document.createElement('div');
    note.className = 'note';
    note.addEventListener('mousedown', function(e) {
        return self.onMousedown(e)

    }, false);

    note.addEventListener('click',function(e) {

            return self.onNoteClick()

        },false
    );

    this.note = note;

    var close = document.createElement('div');
    close.className = 'closebutton';

    close.addEventListener('click',function(e) {

            return self.close(e)

        },false
    );

    note.appendChild(close);

    var edit = createElement('div');
    edit.className = 'edit';
    edit.setAttribute('contenteditable',false);
}