$('document').ready(function () {
  $('form').submit(function () {
    const todoValue = $('#todoInput').val();
    $('#todoSection').prepend(`<p>${todoValue}</p>`);
    $('#todoInput').val('');

    $('h2').css('background-color', 'red');
    return false;
  });
});
