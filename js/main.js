
var $buttonNewTodo = $("#create-new-todo");
var $input = $("#new-todo");
var $panel = $("#todo-panel");
var $buttonToggleFormVisible = $("#toggle-form");

$buttonNewTodo.on("click", function () {
    var $newTodo = $("<div>");
    $newTodo.removeClass().addClass("planned");
    $newTodo.on("click", completePlanned);
    $newTodo.append($input.val());
    $panel.append($newTodo);
});

var deleteCompleted = function () {
    $(this).removeClass().addClass("deleted");

};

var completePlanned = function () {
    $(this).removeClass().addClass("completed");
    $(this).on( "click", deleteCompleted);
};

$buttonToggleFormVisible.on("click", function(){

}) ;
