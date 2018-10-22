// Animation: Fade In
// Varient(s): Normal
(function() {

    // Define Element
    var element = document.getElementsByClassName("something")[0];

    // Show Element
    element.style.visibility = "visible";

    // Grab Opacity
    var opacity = parseFloat(window.getComputedStyle(element, null).getPropertyValue("opacity"));

    // Animation
    (function () { var fadeIn = setInterval(function() {
        if (opacity >= 1.0) {
            clearInterval(fadeIn);
            element.style.opacity = "1.0";
        } else {
            opacity = (opacity + 0.01);
            element.style.opacity = opacity;
        }
    }, 10) })();

})();

// Animation: Fade In
// Varient(s): Progressive
(function() {

    // Define Element
    var element = document.getElementsByClassName("something")[0];

    // Show Element
    element.style.visibility = "visible";

    // Grab Opacity
    var opacity = parseFloat(window.getComputedStyle(element, null).getPropertyValue("opacity"));

    // Animation
    (function () { var fadeIn = setInterval(function() {
        if (opacity >= 1.0) {
            clearInterval(fadeIn);
            element.style.opacity = "1.0";
        } else if (opacity > 0.6 && opacity < 1.0) {
            opacity = (opacity + 0.008);
            element.style.opacity = opacity;
        } else if (opacity > 0.3 && opacity < 0.6) {
            opacity = (opacity + 0.005);
            element.style.opacity = opacity;
        } else if (opacity < 0.3) {
            opacity = (opacity + 0.002);
            element.style.opacity = opacity;
        }
    }, 10) })();

})();

// Animation: Fade Out
// Varient(s): Normal
(function() {

    // Define Element
    var element = document.getElementsByClassName("something")[0];

    // Grab Opacity
    var opacity = parseFloat(window.getComputedStyle(element, null).getPropertyValue("opacity"));

    // Animation
    (function () { var fadeOut = setInterval(function() {
        if (opacity <= 0.0) {
            clearInterval(fadeOut);
            element.style.opacity = "0.0";
            element.style.visibility = "hidden";
        } else {
            opacity = (opacity - 0.01);
            element.style.opacity = opacity;
        }
    }, 10) })();

})();

// Animation: Fade In
// Varient(s): Remove
(function() {

    // Define Element
    var element = document.getElementsByClassName("something")[0];

    // Grab Opacity
    var opacity = parseFloat(window.getComputedStyle(element, null).getPropertyValue("opacity"));

    // Animation
    (function () { var fadeOut = setInterval(function() {
        if (opacity <= 0.0) {
            clearInterval(fadeOut);
            element.style.opacity = "0.0";
            element.style.visibility = "hidden";

            // Remove Element
            setTimeout(function() {
                element.remove();
            }, 250);

        } else {
            opacity = (opacity - 0.01);
            element.style.opacity = opacity;
        }
    }, 10) })();

})();