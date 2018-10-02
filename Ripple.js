document.addEventListener("DOMContentLoaded", function(event) {

    var links = document.querySelectorAll('.ripple');
    
    for (var i = 0, len = links.length; i < len; i++) {
    
        links[i].addEventListener('click', function(e) {
    
            var targetElement = e.target;
            var inkElement = targetElement.querySelector('.ripple-overlay');
    
            if (inkElement) {
                inkElement.classList.remove('ripple-effect');
    
            } else {
                inkElement = document.createElement('div');
                inkElement.classList.add('ripple-overlay');
                inkElement.style.width = inkElement.style.height = Math.max(targetElement.offsetWidth, targetElement.offsetHeight) + 'px';
                targetElement.appendChild(inkElement);
            }
    
            inkElement.style.left = (e.offsetX - inkElement.offsetWidth / 2) + 'px';
            inkElement.style.top = (e.offsetY - inkElement.offsetHeight / 2) + 'px';
            inkElement.classList.add('ripple-effect');
    
        }, false);
    
    }

});