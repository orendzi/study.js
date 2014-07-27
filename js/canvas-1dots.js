(function draw() {
    var canvas = document.getElementById('dots-drawer');
    var ctx = canvas.getContext('2d');
    
    ctx.fillRect(10, 10, 10, 10);
    ctx.font="10pt Georgia";
    ctx.fillText("Here is a simple dot",10,50);
    alert('Im working!');
});