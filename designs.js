// Select color input
// Select size input
var color, height, width;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event. preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height, width);
})

function makeGrid(a, b) {
    $('tr').remove();

    for (var c = 1; c <= a; c++) {
        $('#pixelCanvas').append('<tr id = table' + c + '></tr>');
        for (var d = 1; d <= b; d++) {
            $('#table' + c).append('<td></td>');
        }
    }

    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);        
        }
    })
}
