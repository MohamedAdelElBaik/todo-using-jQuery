$('document').ready(function () {
  let index = 0;
  $('form').submit(function () {
    index++;
    const todoValue = $('#todoInput').val();
    // if there is no todo text don't add empty todo in todo list
    if (todoValue) {
      $('#todoSection').prepend(`<p><span>${index}</span> ${todoValue}</p>`);
    }

    // reset input value
    $('#todoInput').val('');

    $('h2').css('background-color', 'red');
    return false; // prevent default reload
  });
});
