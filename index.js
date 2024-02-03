const todoItemHTML = (i, val) =>
  `<article class='item-list'>
    <span>${i}</span>
    <p>${val}</p>
    <img src="images/deleteIcon.png" alt="delete" id='delete' />
  </article>`;

$('document').ready(function () {
  let index = 0;

  // on click add
  $('form').submit(function () {
    index++; // counter for todo number
    const todoValue = $('#todoInput').val();
    // if there is no todo text don't add empty todo in todo list
    if (todoValue) {
      $('#todoContent').prepend(todoItemHTML(index, todoValue));
    }

    // reset input value
    $('#todoInput').val('');

    return false; // prevent default reload
  });

  // on click delete in the todo item
  $('section').on('click', '#delete', function () {
    var id = $(this).parent();
    id.fadeOut(' ');
  });

  // sort todo content
  $('#todoContent').sortable({
    connectWith: '#doneContent', // to move todo item from this container to (doneContent) container
    opacity: 0.5,
  });

  // sort done content
  $('#doneContent').sortable({
    connectWith: '#todoContent', // like above
    opacity: 0.5,
  });
});
