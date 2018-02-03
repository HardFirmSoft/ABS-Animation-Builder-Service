(function() {
    // Obtain a reference to the canvas element
    var htmlCanvas = document.getElementById('content-pane');
    // Obtain a graphics context on the canvas element for drawing
    var context = htmlCanvas.getContext('2d');
      
    // Start listening to resize events and
    // draw canvas.
    initialize();

    function initialize() {
        // Register an event listener to call the resizeCanvas() function each time 
        // the window is resized.
        window.addEventListener('resize', resizeCanvas, false);
        // Draw canvas border for the first time.
        resizeCanvas();
    }
        
    // Display custom canvas.
    // In this case it's a blue, 5 pixel border that 
    // resizes along with the browser window.					
    function redraw() {
        context.strokeStyle = 'black';
        context.lineWidth = '1';
        context.strokeRect(window.innerHeight*0.1, 0, window.innerWidth*0.9, window.innerHeight*(3/5));
    }

    // Runs each time the DOM window resize event fires.
    // Resets the canvas dimensions to match window,
    // then draws the new borders accordingly.
    function resizeCanvas() {
        htmlCanvas.width = window.innerWidth;
        htmlCanvas.height = (window.innerHeight)*(3/5);
        redraw();
    }

})();
