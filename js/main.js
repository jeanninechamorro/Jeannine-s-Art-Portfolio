function triggerSequence(event) {
    // 1. Stop the browser from leaving instantly
    if (event) event.preventDefault();

    const flash = document.getElementById('flash-overlay');
    const img = document.getElementById('camera-img');

    // 2. Start the zoom immediately
    img.classList.add('zooming');

    // 3. Wait 1 second for the zoom to finish
    setTimeout(() => {
        // 4. Trigger the white flash
        flash.classList.add('active');

        // 5. While the screen is white, change the page
        setTimeout(() => {
            // Replace "index.html" with the name of your portfolio page
            window.location.href = "index.html"; 
        }, 400); 

    }, 1000); 
}

$(document).ready(function(){
    $('.carousel').slick({
        fade: true,
        arrows: true,
        dots: true
    });
});