//Set todo list variable
var todoList = JSON.parse(localStorage.getItem('todos'));

$(document).ready(function(){
//Set counter
    var i = 0;
//Check for todos
    if(localStorage.getItem('todos') != null){
        //Loop through and output li items
        $.each(todoList,function(key, value){
            $('#todos').prepend('<li id="task-'+i+'"><a id="todo_link" href="#edit" data-todo_name ="'+value.todo_name+'" data-todo_date="'+value.todo_date+'">'+value.todo_name+'</a></li>');
            i++;
        });
        //Refresh
        $('#todos').listview('refresh');
    }

//Add Todo
    $('#add_form').submit(function(){
        //Get submitted values
        var todo_name = $('#todo_name').val();
        var todo_date = $('#todo_date').val();

        //Simple field validation
        if(todo_name == ''){
            alert('Please give the todo a name');
        } else if(todo_date == ''){
            alert('Please add a date');
        } else {
            var todos = JSON.parse(localStorage.getItem('todos'));
            //Check todos
            if(todos == null){
                todos = [];
            }
            //Create array with new todo
            var new_todo = {
                "todo_name": todo_name,
                "todo_date": todo_date
            }
            todos.push(new_todo);
            localStorage.setItem('todos',JSON.stringify(todos));
        }
    });

    //Delete Todo
    $('#edit_form').on('click','#delete',function(){
        currentTodoName = localStorage.getItem('currentTodoName');
        currentTodoDate = localStorage.getItem('currentTodoDate');
        //Loop through todos
        for(var i=0; i < todoList.length; i++){
            if(todoList[i].todo_name == currentTodoName){
                todoList.splice(i,1);
            }
            localStorage.setItem('todos',JSON.stringify(todoList));
        }

    $('#todos').on('click','#todo_link',function(){
        localStorage.setItem('currentTodoName',$(this).data('todo_name'));
        localStorage.setItem('currentTodoDate',$(this).data('todo_date'));
    });

    $(document).on('pageshow','#edit',function(){
        currentTodoName = localStorage.getItem('currentTodoName');
        currentTodoDate = localStorage.getItem('currentTodoDate');
    });

    $(document).on('pageshow','#home',function(){
        window.location.reload();
    });

    //Clear Todos
    $('#clear_btn').click(function(){
        localStorage.clear();
    });


});