//
// Elias är bäst
//

elias_canvas = document.getElementById('canvas_element')
context = elias_canvas.getContext('2d')

elias_canvas.width = window.innerWidth;
elias_canvas.height = window.innerHeight;

// Variables
min_size = 30
min_color = "#00FFFF"

// If the mouse is clicked down
mouse_down = false

// Draw things
function draw(x, y) {
    if (mouse_down) {
        
        context.beginPath();
        context.fillStyle = min_color
        context.arc(x,y,min_size,0,2*Math.PI)
        context.fill()
    }
}

function change_size(){
    var size_picker = document.getElementById("size_picker")
    var want_size = parseInt(size_picker.options[size_picker.selectedIndex].value)
    min_size = want_size
}

function change_color(){
    var color_picker = document.getElementById("text_element")
    var want_color = color_picker.value
    min_color = want_color
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect()
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
}

function clear() {
    context.clearRect(0, 0, elias_canvas.width, elias_canvas.height)
}

elias_canvas.addEventListener('mousemove', function(e) {
    var mousePos = getMousePos(elias_canvas, e);
    draw(mousePos.x, mousePos.y)
}, false);

elias_canvas.addEventListener('mousedown', function(e) {
    mouse_down = true
    var mousePos = getMousePos(elias_canvas, e);
    draw(mousePos.x, mousePos.y)
}, true);

elias_canvas.addEventListener('mouseup', function(e) {
    mouse_down = false
}, true);


// antal_potatisar = 4
// nytt_album = 5 + antal_potatisar
// function times_to(vabbe) {
//     return vabbe vabbe * 2// }
// hej = times_to(nytt_album)
// cosole..log(hej)
