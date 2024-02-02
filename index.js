$('document').ready(function () {
  let index = 0;
  $('form').submit(function () {
    index++;
    const todoValue = $('#todoInput').val();
    $('#todoSection').prepend(`<p><span>${index}</span> ${todoValue}</p>`);
    $('#todoInput').val('');

    $('h2').css('background-color', 'red');
    return false;
  });
});
