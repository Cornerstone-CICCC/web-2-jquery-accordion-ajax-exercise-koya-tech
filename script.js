$(function () {
  // your code here
  $(".accordion-header").click(function () {
    $(".accordion-content").slideUp();

    if (!$(this).next().is(":visible")) {
      $(this).next().slideDown();
    }
  });

  $("button").click(function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      method: "GET",
      success: function (data) {
        const todos = data.todos;
        const ul = $(".todos ul");
        ul.empty();
        todos.forEach(function (todo) {
          ul.append(`<li>${todo.todo}</li>`);
        });
      },
      error: function (error) {
        console.error("Error items:", error);
      }
    });
  });
})